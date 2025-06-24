import styled from 'styled-components';
import { COLORS } from '../../utils/Colors';

export const Container = styled.div`
  padding: 2.5rem;
  max-width: 1400px;
  margin: 0 auto;
  background: ${COLORS.white};
  min-height: 100vh;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const Header = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  padding: 2rem 0;
  border-bottom: 2px solid ${COLORS.checkbox.border}20;
`;

export const Title = styled.h1`
  color: ${COLORS.Primary};
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: -0.5px;
`;

export const SearchContainer = styled.div`
  margin: 0 auto;
  max-width: 600px;
  position: relative;

  &::after {
    content: '🔍';
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 2.5rem 1rem 1.5rem;
  border: 2px solid ${COLORS.checkbox.border}40;
  border-radius: 12px;
  font-size: 1.1rem;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${COLORS.Primary};
    box-shadow: 0 0 0 4px ${COLORS.Primary}15;
  }

  &::placeholder {
    color: ${COLORS.Secondary}80;
  }
`;

export const SectionContainer = styled.div`
  margin-bottom: 4rem;
  padding: 0 1rem;

  &:last-child {
    margin-bottom: 2rem;
  }
`;

export const SectionTitle = styled.h2`
  color: ${COLORS.Secondary};
  margin-bottom: 2rem;
  font-size: 1.75rem;
  font-weight: 600;
  padding: 1rem 0;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 4px;
    background: ${COLORS.Primary};
    border-radius: 2px;
  }
`;

export const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
  align-items: stretch;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
`;

export const ArticleCard = styled.div`
  background: ${COLORS.white};
  border-radius: 16px;
  padding: 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 4px 6px ${COLORS.checkbox.border}20;
  border: 1px solid ${COLORS.checkbox.border}20;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px ${COLORS.checkbox.border}30;
    border-color: ${COLORS.Primary}30;
  }
`;

export const ArticleTitle = styled.h3`
  color: ${COLORS.Primary};
  margin-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.4;
`;

export const ArticleDescription = styled.p`
  color: ${COLORS.Secondary};
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 1.1rem;
  flex-grow: 1;
`;

export const ArticleLink = styled.a`
  display: inline-block;
  color: ${COLORS.white};
  background-color: ${COLORS.Primary};
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.2s ease;
  text-align: center;
  
  &:hover {
    background-color: ${COLORS.Active};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px ${COLORS.Primary}30;
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ArticleSource = styled.span`
  color: ${COLORS.Secondary};
  font-size: 12px;
  font-weight: 500;
`;

export const ReadMoreButton = styled.a`
  display: inline-block;
  margin-top: 15px;
  padding: 8px 16px;
  background-color: ${COLORS.Primary};
  color: ${COLORS.white};
  text-decoration: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${COLORS.Active};
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${COLORS.checkbox.border}20;
`; 