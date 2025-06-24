import { COLORS } from "../../utils/Colors";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  overflow: visible;

  @media screen and (min-width: 768px) {
    padding: 24px;
    margin-left: 280px; /* Sidebar width */
    width: calc(100% - 280px);
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 180px); /* Account for header height */
  padding-top: 80px;
  gap: 32px;
`;

export const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 40px;
  position: relative;
  z-index: 1;

  h1 {
    color: ${COLORS.Primary};
    font-size: 28px;
    font-weight: 500;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-size: 32px;
    }
  }
`;

export const TotalTimeBox = styled.div`
  display: inline-block;
  padding: 12px 24px;
  border-radius: 12px;
  background: ${COLORS.white};
  border: 2px solid ${COLORS.Primary}20;
  color: ${COLORS.Primary};
  font-size: 20px;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const TimerSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 32px 0;
  min-height: 300px;
  position: relative;
  z-index: 1;
`;

export const TimerItem = styled.div`
  background: white;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .label {
    color: ${COLORS.Primary};
    font-size: 18px;
    font-weight: 500;
  }

  .time {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 14px;

    .value {
      color: ${COLORS.Primary};
      font-weight: 500;
    }

    .unit {
      color: ${COLORS.Secondary};
    }

    @media screen and (min-width: 768px) {
      font-size: 16px;
    }
  }

  .progress {
    margin-bottom: 8px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 24px 0;
  flex-wrap: wrap;
  margin-top: auto;
  position: relative;
  z-index: 1;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  p {
    color: ${COLORS.Secondary};
    font-size: 14px;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    gap: 40px;
    padding: 32px 0;
  }
`;

export const ToggleButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !["isChecked"].includes(prop),
})<{ isChecked: boolean }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ isChecked }) => isChecked ? COLORS.Active : COLORS.Idle};
  color: ${({ isChecked }) => isChecked ? COLORS.white : COLORS.Secondary};
  box-shadow: ${({ isChecked }) => 
    isChecked ? `0 4px 8px ${COLORS.Active}40` : `0 4px 8px ${COLORS.Idle}40`};
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }

  @media screen and (min-width: 768px) {
    width: 90px;
    height: 90px;
  }
`;

export const LogoutBtnWrapper = styled.div`
  position: fixed;
  left: 16px;
  top: 16px;
  z-index: 10;

  @media screen and (min-width: 768px) {
    position: absolute;
  }
`;

export const ResetBtnWrapper = styled.div`
  position: fixed;
  right: 16px;
  top: 16px;
  z-index: 10;

  @media screen and (min-width: 768px) {
    position: absolute;
  }
`;

