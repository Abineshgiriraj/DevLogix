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
  background: ${COLORS.white};
  
  @media screen and (min-width: 800px) {
    height: 670px;
    width: 85%;
    margin-left: 15%;
    padding: 2rem;
  }
`;

export const CalendarContainer = styled.div`
  .ant-picker-calendar {
    background: ${COLORS.white};
    border-radius: 0;
    box-shadow: none;
    overflow: hidden;
    border: none;
    max-width: 400px;
    margin: 0 auto;
  }

  .ant-picker-calendar-full .ant-picker-panel {
    border-top: none;
  }

  .ant-picker-cell {
    padding: 4px !important;
    height: 48px !important;
    transition: all 0.2s ease;
    text-align: center;

    &:hover {
      background-color: #f0f0f0;
    }
  }

  .ant-picker-calendar-date {
    height: 100% !important;
    margin: 0 !important;
    padding: 4px !important;
    border: none !important;
    border-radius: 0 !important;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
      background-color: #f0f0f0;
    }
  }

  .ant-picker-cell-today .ant-picker-calendar-date {
    border: none !important;
    background-color: #f0f0f0 !important;
    font-weight: bold;
  }

  .ant-picker-calendar-date-value {
    color: #000000;
    font-weight: normal;
    margin: 0;
    font-size: 14px;
    line-height: 1;
    position: relative;
  }

  .ant-picker-cell-in-view {
    color: #000000 !important;
  }

  .ant-picker-calendar-date-content {
    display: none;
  }

  .calendar-navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 24px;
    padding: 0;
    height: 48px;
  }

  .nav-button {
    border: none;
    background: transparent;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    color: #000000;
    cursor: pointer;

    &:hover {
      background: #f0f0f0;
    }

    .anticon {
      color: #000000;
    }
  }

  .current-month {
    font-size: 18px;
    font-weight: bold;
    color: #000000;
    min-width: 120px;
    text-align: center;
  }

  .ant-picker-content {
    th {
      padding: 8px 0;
      font-weight: normal;
      color: #666666;
      font-size: 14px;
      text-transform: none;
      text-align: center;
    }

    td {
      border: none;
    }
  }

  @media screen and (min-width: 800px) {
    padding: 24px;
    background: ${COLORS.white};
    border-radius: 0;
    box-shadow: none;
  }
`;

export const DateCell = styled.div<{ backgroundColor: string; isToday: boolean }>`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  position: relative;
  cursor: pointer;
  transition: all 0.2s ease;

  ${props => props.isToday && `
    font-weight: bold;
    background-color: #f0f0f0;
  `}

  &:hover {
    background-color: #f0f0f0;
  }

  .date-number {
    color: #000000;
    font-size: 14px;
  }

  .note-indicator {
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #666666;
  }

  .activity-indicators {
    display: none;
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
  .ant-checkbox {
    border-radius: 6px;
    transition: all 0.3s ease;
  }

  .ant-checkbox-inner {
    width: 20px;
    height: 20px;
    border-radius: 6px;
    background-color: ${({ isFuture, checked, disabled }) =>
      getColor(isFuture, checked, disabled).backgroundColor};
    border-color: ${({ isFuture, checked, disabled }) =>
      getColor(isFuture, checked, disabled).borderColor};
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${COLORS.Primary} !important;
    border-color: ${COLORS.Primary} !important;
  }

  .ant-checkbox-checked .ant-checkbox-inner::after {
    border-color: #fff;
  }

  .ant-checkbox-disabled .ant-checkbox-inner {
    opacity: 0.6;
  }
`;

export const BottomModal = styled(Modal)`
  @media screen and (max-width: 700px) {
    &.ant-modal {
      position: fixed;
      bottom: 0;
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
      box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.1);
      background-color: ${COLORS.white};
    }

    .ant-modal-header {
      border-bottom: none;
      padding-bottom: 0;
      background-color: transparent;
    }

    .ant-modal-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: ${COLORS.Primary};
      letter-spacing: -0.5px;
    }

    .ant-modal-body {
      padding: 20px 0;
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
  border: 2px solid ${COLORS.checkbox.border}20;
  padding: 12px;
  font-size: 1rem;
  resize: none;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${COLORS.Primary}40;
  }

  &:focus {
    border-color: ${COLORS.Primary};
    box-shadow: 0 0 0 3px ${COLORS.Primary}15;
  }
`;

export const StyledButton = styled(Button)`
  height: 40px;
  border-radius: 10px;
  font-weight: 500;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: none;
  background: ${COLORS.Primary};
  color: ${COLORS.white};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${COLORS.Primary}30;
    background: ${COLORS.Active};
    color: ${COLORS.white};
  }

  &:active {
    transform: translateY(0);
  }
`;
