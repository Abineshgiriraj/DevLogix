import styled from 'styled-components';
import { COLORS } from '../../utils/Colors';

export const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Header = styled.div`
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  color: ${COLORS.Primary};
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const AddItemForm = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid ${COLORS.checkbox.border};
  border-radius: 8px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${COLORS.Primary};
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const Button = styled.button<{ $variant?: 'primary' | 'danger' }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  background-color: ${props => props.$variant === 'danger' ? COLORS.Accent : COLORS.Primary};
  color: ${COLORS.white};

  &:hover {
    background-color: ${props => props.$variant === 'danger' ? '#d32f2f' : COLORS.Active};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${COLORS.white};
  border: 1px solid ${COLORS.checkbox.border};
  border-radius: 8px;
  margin-bottom: 0.5rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin: 0;
  cursor: pointer;
`;

export const ItemText = styled.span<{ $completed?: boolean }>`
  flex: 1;
  font-size: 1rem;
  color: ${COLORS.Secondary};
  text-decoration: ${props => props.$completed ? 'line-through' : 'none'};
  opacity: ${props => props.$completed ? 0.7 : 1};
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const IconButton = styled.button`
  padding: 0.5rem;
  border: none;
  background: none;
  cursor: pointer;
  color: ${COLORS.Secondary};
  transition: color 0.2s ease;

  &:hover {
    color: ${COLORS.Primary};
  }

  &.delete:hover {
    color: ${COLORS.Accent};
  }
`;

export const SearchContainer = styled.div`
  margin-bottom: 2rem;
`;

export const NoItems = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${COLORS.Secondary};
  font-size: 1.1rem;
`; 