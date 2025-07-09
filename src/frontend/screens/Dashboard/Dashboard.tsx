import {
  ExclamationCircleFilled,
  UndoOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Button, Modal, Progress } from "antd";
import { debounce, isEqual } from "lodash";
import { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import { defaultTimer, useTimer } from "../../context/TimerProvider";
import { COLORS } from "../../utils/Colors";
import {
  clearLocalStorage,
  GET,
  getCurrentDate,
  POST,
} from "../../utils/helper";
import {
  ButtonWrapper,
  ContentContainer,
  HeaderSection,
  LogoutBtnWrapper,
  ResetBtnWrapper,
  TimerItem,
  TimerSection,
  TotalTimeBox,
  ToggleButton,
  Wrapper,
} from "./DashboardStyles";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { clearLogs } from "../../reducer/logSlice";
import Loader from "../../components/Loader";

type TimerType = "coding" | "interview" | "job" | null;

const currentDate = getCurrentDate();

export const calculatePercent = (timer: number, totalMin: number = 120) => {
  const completedMin = totalMin - Math.ceil(timer / 60);
  const codingPercent = (completedMin / totalMin) * 100;
  return Math.round(codingPercent);
};

const formatTime = (time: number) => {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <>
      <span className="value">{hours}</span>
      <span className="unit">hr</span>
      <span className="value">{minutes.toString().padStart(2, "0")}</span>
      <span className="unit">min</span>
      <span className="value">{seconds.toString().padStart(2, "0")}</span>
      <span className="unit">sec</span>
    </>
  );
};
const { confirm } = Modal;

const Dashboard = () => {
  const [loading, setLoading] = useState({
    spin: false,
    tick: false,
  });
  const navigate = useNavigate();
  const {
    timers,
    setTimers,
    activeTimer,
    setActiveTimer,
    timersSnapshot,
    setTimersSnapshot,
    loading: loadingData,
    setLoading: setDashboardLoading,
  } = useTimer();
  const timersRef = useRef(timers);
  const timersSnapshotRef = useRef(timersSnapshot);
  const debouncedSaveTimerDataToDBRef = useRef<any>();
  const dispatch = useDispatch<AppDispatch>();

  const totalTime = timers.coding + timers.interview + timers.job;
  const totalHours = Math.floor(totalTime / 3600);

  const handleClick = (type: TimerType) => {
    const isSameTimer = activeTimer === type;
    setActiveTimer(isSameTimer ? null : type);
    debouncedSaveTimerDataToDBRef.current(isSameTimer ? null : type);
  };

  const isDataChanged = () =>
    !isEqual(timersRef.current, timersSnapshotRef.current);

  const saveTimerDataToDB = async (currentTimer: TimerType) => {
    const latestTimers = timersRef.current;
    const tasks = {
      coding: latestTimers.coding,
      interview: latestTimers.interview,
      job: latestTimers.job,
    };

    if (isDataChanged()) {
      setLoading((prev) => ({ ...prev, spin: true }));
      const data = {
        activeTimer: currentTimer,
        date: currentDate,
        tasks,
      };
      const res = await POST("dashboard/", data);
      if (res) {
        setLoading({
          spin: false,
          tick: true,
        });
        setTimersSnapshot(tasks);
      }
      setTimeout(() => {
        setLoading({
          spin: false,
          tick: false,
        });
      }, 2000);
      return res;
    }
  };

  const resetTimer = () => {
    confirm({
      title: "Do you want to reset the timer?",
      icon: <ExclamationCircleFilled />,
      content: "All the progress of this day will be lost!",
      okText: "Reset",
      okType: "danger",
      cancelText: "Cancel",
      maskClosable: true,
      onOk() {
        setTimers(defaultTimer);
      },
    });
  };

  const logoutHandler = debounce(async () => {
    try {
      await saveTimerDataToDB(null);
      dispatch(clearLogs());
      setActiveTimer(null);
      clearLocalStorage();
      // Removed redirect to auth
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }, 500);

  const actionOnVisibilityChange = debounce(() => {
    if (document.visibilityState === "hidden") {
      saveTimerDataToDB(activeTimer);
    }
  }, 1000);

  useEffect(() => {
    debouncedSaveTimerDataToDBRef.current = debounce(saveTimerDataToDB, 2000);
    (async () => {
      const getDashboardData = async () => {
        try {
          setDashboardLoading(true);
          return await GET(`dashboard/${currentDate}`, true);
        } catch (e) {
          console.log(e);
        } finally {
          setDashboardLoading(false);
        }
      };
      const dashboardData = await getDashboardData();
      if (dashboardData) {
        setTimersSnapshot(JSON.parse(JSON.stringify(dashboardData.tasks)));
        setTimers(dashboardData.tasks);
        setActiveTimer(dashboardData.activeTimer);
      }
    })();
  }, []);

  useEffect(() => {
    timersRef.current = timers;
    timersSnapshotRef.current = timersSnapshot;
    document.addEventListener("visibilitychange", actionOnVisibilityChange);
    return () => {
      document.removeEventListener(
        "visibilitychange",
        actionOnVisibilityChange
      );
    };
  }, [timers, timersSnapshot]);

  return (
    <Wrapper>
      <LogoutBtnWrapper>
        <Button
          shape="circle"
          icon={<UploadOutlined style={{ color: COLORS.Active }} />}
          size="large"
          onClick={logoutHandler}
        />
      </LogoutBtnWrapper>
      
      <ResetBtnWrapper>
        <Button
          shape="circle"
          icon={<UndoOutlined style={{ color: COLORS.Active }} />}
          size="large"
          onClick={resetTimer}
        />
      </ResetBtnWrapper>

      <ContentContainer>
        <HeaderSection>
          <h1>Dedicated Time</h1>
          <TotalTimeBox>
            {totalHours} hours
          </TotalTimeBox>
        </HeaderSection>

        <TimerSection>
          <TimerItem>
            <div className="header">
              <span className="label">Coding</span>
              <span className="time">{formatTime(timers.coding)}</span>
            </div>
            <Progress
              percent={calculatePercent(timers.coding, 360)}
              strokeColor={COLORS.Active}
              size="small"
              className="progress"
            />
          </TimerItem>

          <TimerItem>
            <div className="header">
              <span className="label">Interview</span>
              <span className="time">{formatTime(timers.interview)}</span>
            </div>
            <Progress
              percent={calculatePercent(timers.interview)}
              strokeColor={COLORS.Active}
              size="small"
              className="progress"
            />
          </TimerItem>

          <TimerItem>
            <div className="header">
              <span className="label">Job</span>
              <span className="time">{formatTime(timers.job)}</span>
            </div>
            <Progress
              percent={calculatePercent(timers.job)}
              strokeColor={COLORS.Active}
              size="small"
              className="progress"
            />
          </TimerItem>
        </TimerSection>

        <ButtonWrapper>
          <div>
            <ToggleButton
              isChecked={activeTimer === "coding"}
              onClick={() => handleClick("coding")}
            >
              Coding
            </ToggleButton>
            <p>Project</p>
          </div>
          <div>
            <ToggleButton
              isChecked={activeTimer === "interview"}
              onClick={() => handleClick("interview")}
            >
              Interview
            </ToggleButton>
            <p>Preparation</p>
          </div>
          <div>
            <ToggleButton
              isChecked={activeTimer === "job"}
              onClick={() => handleClick("job")}
            >
              Job
            </ToggleButton>
            <p>Application</p>
          </div>
        </ButtonWrapper>
      </ContentContainer>

      {loadingData && <Loader />}
    </Wrapper>
  );
};

export default Dashboard;
