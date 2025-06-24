import { DownOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import { COLORS } from "../../utils/Colors";
import { Log } from "../../reducer/logSlice";
import { calculatePercent, formatTimeString } from "../../utils/timerUtils";
import { upperFirst } from "lodash";

const { Panel } = Collapse;

interface LogItemProps {
  log: Log;
}

const LogItem = ({ log }: LogItemProps) => {
  const renderTimer = (type: string, time: number, totalMinutes: number = 120) => {
    const percent = calculatePercent(time, totalMinutes);
  return (
      <div className="timer-section">
        <div className="timer-header">
          <span className="title">{upperFirst(type)}</span>
          <span className="timer">{formatTimeString(time)}</span>
        </div>
        <div className="progress-container">
          <div
            className="progress-bar"
            style={{
              width: `${percent}%`,
              backgroundColor: COLORS.Active,
            }}
                />
              </div>
            </div>
          );
  };

  return (
    <Collapse
      expandIcon={({ isActive }) => (
        <DownOutlined rotate={isActive ? 180 : 0} />
      )}
      className="log-item"
    >
      <Panel
        header={
          <div className="panel-header">
            <span className="date">{new Date(log.date).toLocaleDateString()}</span>
            <span className="total-time">
              Total: {formatTimeString(log.totalTime)}
            </span>
      </div>
        }
        key="1"
      >
        {renderTimer("coding", log.tasks.coding, 360)}
        {renderTimer("interview", log.tasks.interview)}
        {renderTimer("job", log.tasks.job)}
      </Panel>
    </Collapse>
  );
};

export default LogItem;
