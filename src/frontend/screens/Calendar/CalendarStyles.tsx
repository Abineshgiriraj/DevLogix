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
  background: linear-gradient(to bottom, ${COLORS.white}, #f8f9fa);
  
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
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
    overflow: hidden;
    border: 1px solid rgba(0, 0, 0, 0.05);
  }

  .ant-picker-calendar-full .ant-picker-panel {
    border-top: none;
  }

  .ant-picker-cell {
    padding: 6px !important;
    height: 100px !important;
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.02);
    }
  }

  .ant-picker-calendar-date {
    height: 100% !important;
    margin: 0 !important;
    padding: 6px !important;
    border: none !important;
    border-radius: 12px !important;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: rgba(0, 0, 0, 0.02);
    }
  }

  .ant-picker-cell-today .ant-picker-calendar-date {
    border: 2px solid ${COLORS.Primary}40 !important;
    background-color: ${COLORS.Primary}05 !important;
  }

  .ant-picker-calendar-date-value {
    color: ${COLORS.Secondary};
    font-weight: 600;
    margin: 0 0 6px 6px;
    font-size: 0.9rem;
  }

  .ant-picker-cell-in-view {
    color: ${COLORS.Secondary} !important;
  }

  .ant-picker-calendar-date-content {
    height: calc(100% - 24px) !important;
  }

  .calendar-navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    margin-bottom: 32px;
    padding: 0 24px;
    background: ${COLORS.white};
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    height: 64px;
  }

  .nav-button {
    border: none;
    background: transparent;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 12px;
    transition: all 0.3s ease;
    color: ${COLORS.Primary};

    &:hover {
      background: ${COLORS.Primary}10;
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }

    .anticon {
      color: ${COLORS.Primary};
    }
  }

  .current-month {
    font-size: 1.25rem;
    font-weight: 600;
    color: ${COLORS.Primary};
    min-width: 180px;
    text-align: center;
    letter-spacing: -0.5px;
  }

  .ant-picker-content {
    th {
      padding: 12px 0;
      font-weight: 600;
      color: ${COLORS.Secondary};
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
  }

  @media screen and (min-width: 800px) {
    padding: 24px;
    background: ${COLORS.white};
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  }
`;

export const DateCell = styled.div<{ backgroundColor: string; isToday: boolean }>`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.backgroundColor};
  border-radius: 12px;
  padding: 8px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.04);

  ${props => props.isToday && `
    border: 2px solid ${COLORS.Primary}40;
    background-color: ${COLORS.Primary}05;
  `}

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }

  .date-number {
    color: ${COLORS.Secondary};
    font-weight: 600;
    margin-bottom: 6px;
    font-size: 0.9rem;
  }

  .note-indicator {
    position: absolute;
    bottom: 6px;
    right: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${COLORS.Primary};
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8);
  }

  .activity-indicators {
    display: flex;
    gap: 3px;
    margin-top: 4px;
    flex-wrap: wrap;
  }

  .activity-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.4);
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
