import styled from 'styled-components';
import { COLORS } from '../../utils/Colors';

interface TaskItemProps {
  completed: boolean;
}

export const ChecklistWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

export const ChecklistHeader = styled.div`
  margin-bottom: 30px;
  text-align: center;

  h1 {
    color: ${COLORS.Primary};
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

export const AddTaskSection = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  .ant-input {
    flex: 1;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TaskItem = styled.div<TaskItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: ${COLORS.white};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .ant-checkbox-wrapper {
    flex: 1;
    margin-right: 16px;
    
    span:last-child {
      color: ${props => props.completed ? COLORS.Secondary : COLORS.Primary};
      text-decoration: ${props => props.completed ? 'line-through' : 'none'};
      transition: all 0.2s ease;
    }
  }
`;

export const TaskActions = styled.div`
  display: flex;
  gap: 8px;
  opacity: 0.7;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: ${COLORS.Secondary};
  font-size: 16px;
  background: ${COLORS.white};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;
