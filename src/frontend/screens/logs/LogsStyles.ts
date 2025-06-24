import styled from "styled-components";
import { COLORS } from "../../utils/Colors";

export const LogsWrapper = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  
  h2 {
    margin-bottom: 20px;
    color: ${COLORS.Primary};
  }

  .log-item {
    margin-bottom: 16px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    .panel-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;

      .date {
        font-weight: 500;
        color: ${COLORS.Primary};
      }

      .total-time {
        color: ${COLORS.Secondary};
      }
    }

    .timer-section {
      padding: 12px 16px;
      border-bottom: 1px solid ${COLORS.checkbox.border};

      &:last-child {
        border-bottom: none;
      }

      .timer-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;

        .title {
          font-weight: 500;
          color: ${COLORS.Primary};
        }

        .timer {
          color: ${COLORS.Secondary};
        }
      }

      .progress-container {
        height: 4px;
        background-color: ${COLORS.checkbox.border};
        border-radius: 2px;
        overflow: hidden;

        .progress-bar {
          height: 100%;
          transition: width 0.3s ease;
        }
      }
    }
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  gap: 16px;

  p {
    color: ${COLORS.Secondary};
    margin: 0;
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  padding: 0 16px;

  button {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`; 