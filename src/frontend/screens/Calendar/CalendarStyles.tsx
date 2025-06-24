import { Button, Checkbox, Modal, Input } from "antd";
import styled from "styled-components";
import { COLORS } from "../../utils/Colors";
const { TextArea } = Input;

export const Wrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 110px;
  @media screen and (min-width: 800px) {
    height: 670px;
    width: 80%;
    margin-left: 18%;
    margin-right: 10%;
  }
`;

export const CalendarContainer = styled.div`
  .ant-picker-calendar {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .ant-picker-calendar-full .ant-picker-panel {
    border-top: none;
  }

  .ant-picker-cell {
    padding: 4px !important;
    height: 80px !important;
  }

  .ant-picker-calendar-date {
    height: 100% !important;
    margin: 0 !important;
    padding: 4px !important;
    border: none !important;
    border-radius: 4px !important;
  }

  .ant-picker-cell-today .ant-picker-calendar-date {
    border: 2px solid ${COLORS.Active} !important;
  }

  .ant-picker-calendar-date-value {
    color: #000;
    font-weight: 500;
    margin: 0 0 4px 4px;
  }

  .ant-picker-cell-in-view {
    color: #000 !important;
  }

  .ant-picker-calendar-date-content {
    height: calc(100% - 20px) !important;
  }

  .calendar-navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 24px;
    padding: 0 16px;
  }

  .nav-button {
    border: none;
    background: transparent;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }

    .anticon {
      color: ${COLORS.Active};
    }
  }

  .current-month {
    font-size: 20px;
    font-weight: 500;
    color: #000;
    min-width: 160px;
    text-align: center;
  }

  @media screen and (min-width: 800px) {
    padding: 24px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const DateCell = styled.div<{ backgroundColor: string; isToday: boolean }>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.backgroundColor};
  border-radius: 4px;
  padding: 4px;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;

  ${props => props.isToday && `
    border: 2px solid ${COLORS.Active};
  `}

  &:hover {
    transform: scale(1.02);
  }

  .date-number {
    color: #000;
    font-weight: 500;
    margin-bottom: 4px;
  }

  .note-indicator {
    position: absolute;
    bottom: 4px;
    right: 4px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: ${COLORS.Active};
  }

  .activity-indicators {
    display: flex;
    gap: 2px;
    margin-top: 2px;
  }

  .activity-dot {
    width: 4px;
    height: 4px;
    border-radius: 50%;
  }
`;

const getColor = (isFuture: boolean, checked?: boolean, disabled?: boolean) => {
  if (isFuture) {
    return {
      backgroundColor: COLORS.checkbox.bg_future,
      borderColor: COLORS.checkbox.border,
    };
  } else if (checked && !disabled) {
    return {
      backgroundColor: COLORS.checkbox.bg_active,
      borderColor: COLORS.checkbox.bg_active,
    };
  } else if (checked && disabled) {
    return {
      backgroundColor: COLORS.checkbox.bg_disabled,
      borderColor: COLORS.checkbox.bg_disabled,
    };
  } else {
    return {
      backgroundColor: COLORS.checkbox.bg_unchecked,
      borderColor: COLORS.checkbox.border,
    };
  }
};

export const StyledCheckbox = styled(Checkbox).withConfig({
  shouldForwardProp: (prop) => !["isFuture"].includes(prop),
})<{ isFuture: boolean }>`
  .ant-checkbox-inner {
    background-color: ${({ isFuture, checked, disabled }) =>
      getColor(isFuture, checked, disabled).backgroundColor};
    border-color: ${({ isFuture, checked, disabled }) =>
      getColor(isFuture, checked, disabled).borderColor};
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${COLORS.checkbox.bg_active} !important;
  }

  .ant-checkbox-checked .ant-checkbox-inner::after {
    border-color: #fff;
  }

  .ant-checkbox-disabled .ant-checkbox-inner {
    opacity: 0.7;
  }
`;

export const BottomModal = styled(Modal)`
  @media screen and (max-width: 700px) {
    &.ant-modal {
      position: fixed;
      bottom: -20px;
      top: auto;
      left: 0;
      right: 0;
      margin: 0;
      width: 100%;
      max-width: 100%;
    }

    .ant-modal-content {
      border-radius: 24px 24px 0 0;
      padding: 24px;
      margin: 0;
      box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
      background-color: #f8f9fa;
    }

    .ant-modal-header {
      border-bottom: none;
      padding-bottom: 0;
      background-color: transparent;
    }

    .ant-modal-title {
      font-size: 20px;
      font-weight: 600;
      color: #333;
    }

    .ant-modal-body {
      padding: 16px 0;
    }

    .ant-modal-footer {
      border-top: none;
      padding-top: 0;
      background-color: transparent;
      text-align: right;
    }
  }
`;

export const StyledTextArea = styled(TextArea)`
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  padding: 12px;
  font-size: 14px;
  resize: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #1890ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`;

export const StyledButton = styled(Button)`
  border-radius: 12px;
  font-weight: 500;
  padding: 8px 20px;
  transition: all 0.3s ease;
  width: 120px;

  &:disabled {
    background-color: ${COLORS.c2};
    color: ${COLORS.c1};
  }
`;
