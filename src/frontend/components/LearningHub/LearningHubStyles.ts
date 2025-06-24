import styled from 'styled-components';
import { COLORS } from '../../utils/Colors';

export const Wrapper = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const SearchContainer = styled.div`
  margin-bottom: 30px;
  
  input {
    width: 100%;
    padding: 12px 20px;
    border: 2px solid ${COLORS.Primary};
    border-radius: 8px;
    font-size: 16px;
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: ${COLORS.Active};
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
  }
`;

export const CategorySection = styled.section`
  margin-bottom: 40px;
`;

export const CategoryTitle = styled.h2`
  color: ${COLORS.Primary};
  font-size: 24px;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid ${COLORS.Primary};
`;

export const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ArticleCard = styled.article`
  background: ${COLORS.white};
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const ArticleTitle = styled.h3`
  color: ${COLORS.Primary};
  margin: 0 0 10px 0;
  font-size: 18px;
`;

export const ArticleDescription = styled.p`
  color: ${COLORS.Secondary};
  margin: 0 0 15px 0;
  font-size: 14px;
  line-height: 1.5;
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