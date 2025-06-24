import styled from "styled-components";
import { COLORS } from "../../utils/Colors";
import InfiniteScroll from "react-infinite-scroll-component";

export const Wrapper = styled.div`
  width: calc(100% - 250px);
  margin-left: 250px;
  min-height: calc(100vh - 64px);
  padding: 1.5rem;
  background-color: #ffffff;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding: 1rem;
  }
`;

export const FilterWrapper = styled.div`
  margin: 1rem 0;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  margin-top: 1rem;
`;

export const StyledInfiniteScroll = styled(InfiniteScroll as any)`
  overflow-x: hidden !important;
`;

export const LogItemWrapper = styled.div`
  padding: 1rem;
  border: 1px solid ${COLORS.checkbox.border};
  border-radius: 8px;
  margin-bottom: 1rem;
  background: #fff;

  .date-wrapper {
    color: ${COLORS.Primary};
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .item {
    .title {
      color: ${COLORS.Primary};
      font-weight: 500;
      margin-bottom: 0.5rem;
    }

    .time {
      color: ${COLORS.Secondary};
      margin-bottom: 0.5rem;
      font-size: 0.9rem;

      span {
        color: ${COLORS.Secondary};
        opacity: 0.7;
        margin-left: 2px;
        font-size: 0.8rem;
      }
    }

    .progress-bar {
      .ant-progress-bg {
        height: 4px !important;
      }
    }
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: 16px;

  p {
    color: ${COLORS.Secondary};
    margin: 0;
    font-size: 0.95rem;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  .header-left {
    h1 {
      font-size: 1.5rem;
      color: ${COLORS.Primary};
      margin: 0;
    }

    p {
      color: ${COLORS.Secondary};
      font-size: 0.9rem;
      margin: 4px 0 0 0;
    }
  }

  .header-right {
    display: flex;
    gap: 12px;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    .header-right {
      width: 100%;
      
      .ant-btn {
        flex: 1;
      }
    }
  }
`; 