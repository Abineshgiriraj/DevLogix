import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Empty, Spin, Button } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import { GET } from "../../utils/helper";
import LogItem from "./LogItem";
import { LogsWrapper, LoadingContainer, HeaderSection } from "./LogsStyles";
import {
  updateLogs,
  setLoading,
  setError,
  clearLogs
} from "../../reducer/logSlice";
import { AppDispatch, RootState } from "../../store/store";
import Header from "../../components/Header/Header";

const Logs: React.FC = () => {
  const { logs: logsData, loading, error } = useSelector(
    ({ logState }: RootState) => logState
  );
  const dispatch = useDispatch<AppDispatch>();

  const getLogs = async (showLoading = true) => {
    try {
      if (showLoading) {
        dispatch(setLoading(true));
      }
      const res = await GET("logs/", true);
      if (res?.logs) {
        dispatch(updateLogs(res.logs));
        dispatch(setError(null));
      } else {
        throw new Error("No logs data received");
      }
    } catch (error) {
      console.error(error);
      dispatch(setError("Failed to fetch activity logs. Please try again."));
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleRetry = () => {
    dispatch(clearLogs());
    getLogs();
  };

  // Auto-refresh logs every 5 minutes
  useEffect(() => {
    const interval = setInterval(() => {
      if (!loading && !error) {
        getLogs(false);
      }
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [loading, error]);

  // Initial load
  useEffect(() => {
    if (!logsData.length && !loading && !error) {
      getLogs();
    }
  }, []);

  if (loading && !logsData.length) {
    return (
      <LoadingContainer>
        <Spin size="large" />
        <p>Loading activity logs...</p>
      </LoadingContainer>
    );
  }

  return (
    <LogsWrapper>
      <Header title="Activity Logs" />
      
      <HeaderSection>
        <Button 
          icon={<ReloadOutlined />} 
          onClick={handleRetry}
          loading={loading}
        >
          Refresh
        </Button>
      </HeaderSection>

      {error && (
        <Alert
          message="Error"
          description={error}
          type="error"
          showIcon
          action={
            <Button size="small" type="primary" onClick={handleRetry}>
              Try Again
            </Button>
          }
          style={{ marginBottom: 16 }}
        />
      )}

      {!error && !loading && !logsData.length ? (
        <Empty
          description="No activity logs found"
          image={Empty.PRESENTED_IMAGE_SIMPLE}
        />
      ) : (
        logsData.map((log) => (
          <LogItem key={log._id} log={log} />
        ))
      )}
    </LogsWrapper>
  );
};

export default Logs;
