import { Progress } from "antd";
import { COLORS } from "../../utils/Colors";
import { Log } from "../../reducer/logSlice";
import { upperFirst } from "lodash";
import { formatDate } from "../../utils/helper";
import styled from "styled-components";

const LogItemContainer = styled.div`
  margin-bottom: 0.5rem;

  .date-header {
    background-color: rgba(255, 255, 224, 0.5);
    padding: 0.25rem 1rem;
    margin-bottom: 0.25rem;
    font-weight: 500;
  }

  .tasks-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
    padding: 0 1rem;
  }

  .task-item {
    .title {
      color: ${COLORS.Primary};
      font-weight: 500;
      margin-bottom: 0.25rem;
    }

    .time {
      color: ${COLORS.Secondary};
      margin-bottom: 0.25rem;
      font-size: 0.9rem;

      span {
        color: ${COLORS.Secondary};
        opacity: 0.7;
        margin-left: 2px;
        font-size: 0.8rem;
      }
    }

    .ant-progress {
      line-height: 1;
    }
  }
`;

type PropType = {
  log: Log;
};

const LogItem = ({ log }: PropType) => {
  const { date, tasks } = log;
  const dateString = new Date(date);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return {
      hours,
      minutes: minutes || undefined
    };
  };

  const getTaskTime = (taskTime: number, totalTime: number) => {
    const timePassed = totalTime - taskTime;
    return formatTime(timePassed);
  };

  const renderTask = (title: string, time: number) => {
    const totalTime = title.includes("coding") ? 21600 : 7200; // 6 hours for coding, 2 hours for others
    const { hours, minutes } = getTaskTime(time, totalTime);

    return (
      <div className="task-item" key={title}>
        <p className="title">{upperFirst(title)}</p>
        <p className="time">
          {hours} <span>hr</span> {minutes && <>{minutes} <span>min</span></>}
        </p>
        <Progress
          percent={calculatePercent(time, title.includes("coding") ? 360 : 120)}
          size={{ height: 4 }}
          strokeColor={COLORS.Active}
          showInfo={false}
        />
      </div>
    );
  };

  return (
    <LogItemContainer>
      <div className="date-header">
        {formatDate(dateString)} :
      </div>
      <div className="tasks-container">
        {renderTask("coding", tasks.coding)}
        {renderTask("interview", tasks.interview)}
        {renderTask("job", tasks.job)}
      </div>
    </LogItemContainer>
  );
};

export default LogItem;

const calculatePercent = (time: number, totalMinutes: number = 120) => {
  const timeInMinutes = time / 60;
  const percent = ((totalMinutes - timeInMinutes) / totalMinutes) * 100;
  return Math.min(Math.max(percent, 0), 100);
};