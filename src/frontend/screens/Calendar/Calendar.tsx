import {
  CaretLeftFilled,
  CaretRightFilled,
  LoadingOutlined,
} from "@ant-design/icons";
import {
  Badge,
  Button,
  Calendar,
  CheckboxChangeEvent,
  Select,
  Spin,
} from "antd";
import dayjs, { Dayjs } from "dayjs";
import { debounce, isEmpty } from "lodash";
import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SwipeDirections, useSwipeable } from "react-swipeable";
import { isMobile } from "../../components/BottomNav/BottomNav";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader";
import {
  saveFetchedCompleteDates,
  saveFetchedNotes,
  updateCompleteDates,
  updateCurrentDate,
  updateLoading,
  updateModalOpen,
  updateNotes,
} from "../../reducer/calendarSlice";
import { AppDispatch, RootState } from "../../store/store";
import { COLORS } from "../../utils/Colors";
import { GET, getLocalStorage, POST } from "../../utils/helper";
import {
  BottomModal,
  CalendarContainer,
  StyledButton,
  StyledCheckbox,
  StyledTextArea,
  Wrapper,
  DateCell,
} from "./CalendarStyles";

interface ActivityData {
  coding: number;
  job: number;
  interview: number;
}

interface DateData {
  activities: ActivityData;
  note: string;
}

type HeatmapData = Record<string, DateData>;

type HeatLevel = 0 | 1 | 2 | 3 | 4;

const HEAT_COLORS: Record<HeatLevel, string> = {
  0: '#ebedf0',
  1: '#9be9a8',
  2: '#40c463',
  3: '#30a14e',
  4: '#216e39'
} as const;

const calculateHeatLevel = (activities: ActivityData): HeatLevel => {
  const total = activities.coding + activities.job + activities.interview;
  if (total === 0) return 0;
  if (total <= 2) return 1;
  if (total <= 4) return 2;
  if (total <= 6) return 3;
  return 4;
};

const getHeatColor = (activities: ActivityData): string => {
  const level = calculateHeatLevel(activities);
  return HEAT_COLORS[level];
};

interface completedDateType {
  userId: string;
  date: string;
  isChecked: boolean;
}

const CalendarWithCheckbox = () => {
  const { completedDates, isModalOpen, loading, notes, currentDateString } =
    useSelector(({ calendarState }: RootState) => calendarState);
  const dispatch = useDispatch<AppDispatch>();
  const userData = JSON.parse(getLocalStorage("userData") || "{}");
  const updateTimerRef = useRef<NodeJS.Timeout>();

  const [heatmapData, setHeatmapData] = useState<HeatmapData>(() => {
    const stored = localStorage.getItem('heatmapData');
    return stored ? JSON.parse(stored) : {};
  });

  const currentDate = dayjs(currentDateString);
  const dateString = currentDate.format("YYYY-MM-DD");

  const fetchMonthData = async (date: Dayjs) => {
    dispatch(updateLoading({ spin: true, tick: false }));
    const userId = userData.id;
    const year = date.year();
    let month = (date.month() + 1).toString();
    month = parseInt(month) < 10 ? `0${month}` : month;

    const daysInMonth = date.daysInMonth();
    const startDate = `${year}-${month}-01`;
    const endDate = `${year}-${month}-${daysInMonth}`;
    const urlString = `/calendar/month?userId=${userId}&startDate=${startDate}&endDate=${endDate}`;
    try {
      const res = await GET(urlString, true);

      if (res) {
        const notesData = Object.entries(res.data)?.reduce(
          (acc: Record<string, string>, [date, value]: any) => {
            acc[date] = value.note;
            return acc;
          },
          {}
        );
        dispatch(saveFetchedCompleteDates(res.data));
        dispatch(saveFetchedNotes(notesData));
      }
    } catch (e) {
      console.error(e);
    }
    dispatch(updateLoading({ spin: false, tick: false }));
  };

  const updateHeatmapData = useCallback(() => {
    const newData = { ...heatmapData };
    const today = dayjs().format('YYYY-MM-DD');
    
    // Simulate activity updates - in a real app, this would fetch from your backend
    if (newData[today]) {
      newData[today].activities.coding += Math.random() > 0.7 ? 1 : 0;
      newData[today].activities.job += Math.random() > 0.8 ? 1 : 0;
      newData[today].activities.interview += Math.random() > 0.9 ? 1 : 0;
    } else {
      newData[today] = {
        activities: { coding: 0, job: 0, interview: 0 },
        note: ''
      };
    }
    
    setHeatmapData(newData);
    localStorage.setItem('heatmapData', JSON.stringify(newData));
  }, [heatmapData]);

  useEffect(() => {
    // Set up the 10-minute interval for updating heatmap data
    updateTimerRef.current = setInterval(updateHeatmapData, 10 * 60 * 1000);
    
    // Initial update
    updateHeatmapData();
    
    return () => {
      if (updateTimerRef.current) {
        clearInterval(updateTimerRef.current);
      }
    };
  }, [updateHeatmapData]);

  const onMonthChange = (direction: SwipeDirections) => {
    let newDate =
      direction === "Left"
        ? currentDate.add(1, "month")
        : currentDate.subtract(1, "month");

    fetchMonthData(newDate);
    dispatch(updateCurrentDate(newDate.toISOString()));
  };

  const swipeHandlers = useSwipeable({
    onSwiped: (eventData) => {
      const direction = eventData.dir;
      onMonthChange(direction);
    },
    delta: { up: 500, down: 500, left: 80, right: 80 },
  });

  const saveCompletedDates = useCallback(
    debounce(async (data: completedDateType) => {
      try {
        dispatch(updateLoading({ spin: true, tick: false }));
        await POST("/calendar/update", data);
        dispatch(updateLoading({ spin: false, tick: true }));
      } catch (e) {
        console.error(e);
      } finally {
        setTimeout(() => {
          dispatch(updateLoading({ spin: false, tick: false }));
        }, 1000);
      }
    }, 500),
    []
  );

  const handleCheckboxChange = (date: Dayjs, e: CheckboxChangeEvent) => {
    const dateString = date.toISOString().split("T")[0];
    const userId = userData.id;

    const data = {
      userId,
      date: dateString,
      isChecked: e.target.checked,
    };

    saveCompletedDates(data);
    dispatch(
      updateCompleteDates({
        dateString,
        checked: e.target.checked,
      })
    );
  };

  const handleDateSelect = (date: Dayjs) => {
    if (document.activeElement?.className.includes("ant-checkbox-input")) {
      return;
    }
    dispatch(updateModalOpen(true));
    dispatch(updateCurrentDate(date.toISOString()));
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newNote = e.target.value;
    dispatch(updateNotes({
        dateString,
      value: newNote
    }));
    
    // Update heatmap data with the new note
    const newHeatmapData = { ...heatmapData };
    if (!newHeatmapData[dateString]) {
      newHeatmapData[dateString] = {
        activities: { coding: 0, job: 0, interview: 0 },
        note: newNote
      };
    } else {
      newHeatmapData[dateString].note = newNote;
    }
    setHeatmapData(newHeatmapData);
    localStorage.setItem('heatmapData', JSON.stringify(newHeatmapData));
  };

  const handleSaveNote = async () => {
    if (notes[dateString]) {
      const userId = userData.id;
      const data = {
        userId,
        date: dateString,
        note: notes[dateString],
      };
      try {
        await POST("/calendar/update", data);
        dispatch(updateLoading({ spin: false, tick: true }));
      } catch (e) {
        console.error(e);
      }
    }
  };

  const dateCellRender = (date: Dayjs) => {
    const dateStr = date.format("YYYY-MM-DD");
    const isToday = date.isSame(dayjs(), "day");
    const dateData = heatmapData[dateStr] || {
      activities: { coding: 0, job: 0, interview: 0 },
      note: notes[dateStr] || ''
    };

    return (
      <DateCell
        backgroundColor={getHeatColor(dateData.activities)}
        isToday={isToday}
        onClick={() => handleDateSelect(date)}
      >
        <div className="date-number">{date.date()}</div>
        <div className="activity-indicators">
          {dateData.activities.coding > 0 && (
            <div className="activity-dot" style={{ backgroundColor: '#216e39' }} />
          )}
          {dateData.activities.job > 0 && (
            <div className="activity-dot" style={{ backgroundColor: '#30a14e' }} />
          )}
          {dateData.activities.interview > 0 && (
            <div className="activity-dot" style={{ backgroundColor: '#40c463' }} />
          )}
      </div>
        {dateData.note && <div className="note-indicator" />}
      </DateCell>
    );
  };

  const onLeftClick = () => {
    onMonthChange("Right");
  };

  const onRightClick = () => {
    onMonthChange("Left");
  };

  useEffect(() => {
    if (isEmpty(completedDates)) {
      fetchMonthData(currentDate);
    }
  }, []);

  return (
    <Wrapper>
      <Header title={`Calendar - ${currentDate.format('MMMM YYYY')}`} />
      <CalendarContainer {...swipeHandlers}>
        <div className="calendar-navigation">
          <Button
            icon={<CaretLeftFilled />} 
            onClick={onLeftClick}
            className="nav-button"
          />
          <span className="current-month">{currentDate.format('MMMM YYYY')}</span>
          <Button 
            icon={<CaretRightFilled />} 
            onClick={onRightClick}
            className="nav-button"
          />
        </div>
        <Calendar
          fullscreen={!isMobile}
          value={currentDate}
          dateFullCellRender={dateCellRender}
          mode="month"
          headerRender={() => null}
          />
      </CalendarContainer>
      <BottomModal
        title={dayjs(currentDateString).format("MMMM D, YYYY")}
        open={isModalOpen}
        onOk={handleSaveNote}
        onCancel={() => dispatch(updateModalOpen(false))}
        footer={[
          <StyledButton
            key="submit"
            type="primary"
            onClick={handleSaveNote}
          >
            Save
          </StyledButton>,
        ]}
      >
        <StyledTextArea
          value={notes[dateString] || ""}
          onChange={handleNoteChange}
          placeholder="Add a note for this date..."
          autoSize={{ minRows: 3, maxRows: 5 }}
        />
      </BottomModal>
      {loading.spin && (
        <Spin
          indicator={
            <LoadingOutlined
              style={{
                fontSize: 24,
                position: "fixed",
                top: "50%",
                left: "50%",
              }}
              spin
            />
          }
        />
      )}
    </Wrapper>
  );
};

export default CalendarWithCheckbox;
