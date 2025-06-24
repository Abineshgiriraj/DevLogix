import styled from 'styled-components';
import { COLORS } from '../../utils/Colors';

export const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
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

export const SearchContainer = styled.div`
  margin-bottom: 2rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
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

export const SectionContainer = styled.div`
  margin-bottom: 3rem;
`;

export const SectionTitle = styled.h2`
  color: ${COLORS.Secondary};
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  border-bottom: 2px solid ${COLORS.checkbox.border};
  padding-bottom: 0.5rem;
`;

export const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ArticleCard = styled.div`
  background: ${COLORS.white};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
`;

export const ArticleTitle = styled.h3`
  color: ${COLORS.Primary};
  margin-bottom: 0.75rem;
  font-size: 1.25rem;
`;

export const ArticleDescription = styled.p`
  color: ${COLORS.Secondary};
  margin-bottom: 1rem;
  line-height: 1.5;
`;

export const ArticleLink = styled.a`
  display: inline-block;
  color: ${COLORS.white};
  background-color: ${COLORS.Primary};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${COLORS.Active};
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
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid ${COLORS.checkbox.border};
`; 