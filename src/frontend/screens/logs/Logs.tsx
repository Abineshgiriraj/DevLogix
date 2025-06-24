import { Empty, Input, Spin } from "antd";
import { SearchProps } from "antd/es/input";
import { debounce } from "lodash";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import {
  appendLogs,
  appendSearchLogs,
  defaultPagination,
  initialLogState,
  LogsResponse,
  restoreLogs,
  updateLogs,
} from "../../reducer/logSlice";
import { AppDispatch, RootState } from "../../store/store";
import { GET } from "../../utils/helper";
import LogItem from "./LogItem";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroll-component";

const Wrapper = styled.div`
  width: calc(100% - 250px);
  margin-left: 250px;
  min-height: calc(100vh - 64px);
  padding: 1rem;
  background-color: #ffffff;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding: 0.75rem;
  }
`;

const SearchWrapper = styled.div`
  margin: 0.5rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .ant-input-search {
    max-width: 300px;
  }
`;

const ContentWrapper = styled.div`
  margin-top: 0.5rem;

  .ant-spin {
    margin: 0.5rem 0;
  }

  .ant-empty {
    margin: 1rem 0;
  }
`;

const StyledInfiniteScroll = styled(InfiniteScroll as any)`
  overflow-x: hidden !important;
`;

interface GetLogType {
  page?: number;
  limit?: number;
  search?: string;
  startDate?: string;
  endDate?: string;
}

const Logs: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { logs: logsData, pagination } = useSelector(
    ({ logState }: RootState) => logState
  );

  const dispatch = useDispatch<AppDispatch>();
  const { Search } = Input;

  const getLogs = async () => {
    let urlString = "dashboard/logs/all?";
    try {
      setLoading(true);
      const logs: LogsResponse = await GET(urlString, true);
      if (logs) {
        dispatch(updateLogs(logs));
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const getQueryLogs = async ({
    page = 0,
    limit = 10,
    search = "",
    startDate = "",
    endDate = "",
  }: GetLogType) => {
    let urlString = "dashboard/logs/all?";
    if (page) {
      urlString = urlString.concat(`page=${page}&`);
    }
    if (limit) {
      urlString = urlString.concat(`limit=${limit}&`);
    }
    if (search) {
      urlString = urlString.concat(`search=${search}&`);
    }
    if (startDate) {
      urlString = urlString.concat(`startDate=${startDate}&`);
    }
    if (endDate) {
      urlString = urlString.concat(`endDate=${endDate}&`);
    }
    try {
      setLoading(true);
      const logs: LogsResponse = await GET(urlString, true);
      return logs;
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const onSearch: SearchProps["onSearch"] = debounce(async (value) => {
    try {
      if (value) {
        const logs = await getQueryLogs({
          search: value.trim(),
        });
        if (logs) {
          dispatch(appendSearchLogs(logs));
        } else {
          dispatch(
            appendSearchLogs({
              logs: [],
              pagination: defaultPagination,
            })
          );
        }
      }
    } catch (e: any) {
      console.error(e);
      if (e?.status === 404) {
        dispatch(appendSearchLogs(initialLogState));
      }
    }
  }, 500);

  const fetchData = async () => {
    const logs = await getQueryLogs({
      page: pagination.currentPage + 1,
    });
    if (logs) {
      dispatch(appendLogs(logs));
    }
  };

  const onClear = () => {
    dispatch(restoreLogs());
  };

  const heightOfInfiniteScroll = Math.floor(window.innerHeight * 0.85);

  useEffect(() => {
    if (!logsData.length) {
      getLogs();
    }
  }, []);

  return (
    <Wrapper>
      <Header title="Logs" />
      <SearchWrapper>
        <Search
          placeholder="Search by Date"
          allowClear
          onSearch={onSearch}
          style={{ width: 300 }}
          onClear={onClear}
        />
      </SearchWrapper>
      <ContentWrapper>
        {logsData.length ? (
          <StyledInfiniteScroll
            dataLength={logsData.length}
            next={fetchData}
            hasMore={logsData.length < pagination.totalLogs}
            loader={<Spin size="small" />}
            height={heightOfInfiniteScroll}
          >
            {logsData?.map((log) => (
              <LogItem key={log._id} log={log} />
            ))}
          </StyledInfiniteScroll>
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </ContentWrapper>
      {loading && <Spin />}
    </Wrapper>
  );
};

export default Logs;