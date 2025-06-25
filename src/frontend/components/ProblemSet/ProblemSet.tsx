import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Tabs, Collapse, Input, Tag, Spin } from 'antd';
import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';
import { COLORS } from '../../utils/Colors';
import { Question, questions } from './problemSetData';

const { Panel } = Collapse;
const { TabPane } = Tabs;

// Styled Components
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem 1rem;
  margin-top: 110px;
  background: ${COLORS.white};
  overflow-x: hidden;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }

  @media (min-width: 800px) {
    width: 85%;
    margin-left: 15%; // Matches sidebar width
    max-width: calc(100% - 15%); // Ensures content doesn't overflow
    padding: 2rem 3rem;
  }

  @media (min-width: 1200px) {
    padding: 2rem 4rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const SearchBar = styled.div`
  margin-bottom: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const QuestionCard = styled(Collapse)`
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }

  .ant-collapse-header {
    font-weight: 500;
    padding: 16px 24px !important;
  }

  .ant-collapse-content-box {
    padding: 20px 24px !important;
  }

  @media (max-width: 768px) {
    .ant-collapse-header {
      padding: 12px 16px !important;
    }

    .ant-collapse-content-box {
      padding: 16px !important;
    }
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 12px;
`;

const StyledCheckbox = styled.input`
  width: 18px;
  height: 18px;
  margin: 0;
  cursor: pointer;
  accent-color: ${COLORS.Primary};
  
  &:checked {
    background-color: ${COLORS.Primary};
    border-color: ${COLORS.Primary};
  }
`;

const QuestionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

const TitleText = styled.span<{ completed: boolean }>`
  ${({ completed }) => completed && `
    text-decoration: line-through;
    opacity: 0.7;
  `}
`;

const DifficultyTag = styled(Tag)<{ difficulty: string }>`
  min-width: 70px;
  text-align: center;
  font-weight: 500;
  border: none;
  margin-right: 0;
  
  ${({ difficulty }) => {
    switch (difficulty.toLowerCase()) {
      case 'easy':
        return `background-color: #e6f4ea; color: #1a7f37;`;
      case 'medium':
        return `background-color: #fff2d6; color: #b76e00;`;
      case 'hard':
        return `background-color: #ffe3e3; color: #d92d20;`;
      default:
        return '';
    }
  }}
`;

const Section = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  color: ${COLORS.Secondary};
  margin-bottom: 1rem;
`;

const CodeBlock = styled.pre`
  background-color: #f6f8fa;
  padding: 1rem;
  border-radius: 6px;
  overflow-x: auto;
  font-family: 'Courier New', Courier, monospace;
  margin: 1rem 0;
  font-size: 0.9rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    padding: 0.75rem;
    font-size: 0.85rem;
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 2rem;
  color: ${COLORS.Secondary};
  font-size: 1.1rem;
`;

const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    margin-bottom: 2rem;
  }

  .ant-tabs-tab {
    padding: 12px 24px;
    transition: all 0.3s ease;

    &:hover {
      color: ${COLORS.Primary};
    }
  }

  .ant-tabs-tab-active {
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .ant-tabs-tab {
      padding: 8px 16px;
    }
  }
`;

// Custom hook for managing completed questions
const useCompletedQuestions = () => {
  const [completedQuestions, setCompletedQuestions] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Load completed questions from localStorage
    const loadCompletedQuestions = () => {
      const saved = localStorage.getItem('devlogix_completed_questions');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setCompletedQuestions(new Set(parsed));
        } catch (error) {
          console.error('Error loading completed questions:', error);
        }
      }
    };

    loadCompletedQuestions();
  }, []);

  const toggleQuestion = useCallback((title: string) => {
    setCompletedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      
      // Save to localStorage
      localStorage.setItem('devlogix_completed_questions', JSON.stringify([...newSet]));
      return newSet;
    });
  }, []);

  return {
    completedQuestions,
    toggleQuestion
  };
};

const ProblemSet: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const { completedQuestions, toggleQuestion } = useCompletedQuestions();

  const filteredQuestions = useMemo(() => {
    return questions.filter(question => {
      const matchesSearch = question.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          question.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDifficulty = activeTab === 'all' || question.difficulty.toLowerCase() === activeTab.toLowerCase();
      return matchesSearch && matchesDifficulty;
    });
  }, [searchQuery, activeTab]);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  const handleTabChange = useCallback((key: string) => {
    setActiveTab(key);
  }, []);

  const renderQuestion = useCallback((question: Question) => (
    <QuestionCard key={question.id}>
      <Panel
        header={
          <QuestionTitle>
            <CheckboxContainer>
              <StyledCheckbox
                type="checkbox"
                checked={completedQuestions.has(question.title)}
                onChange={() => toggleQuestion(question.title)}
              />
            </CheckboxContainer>
            <DifficultyTag difficulty={question.difficulty}>
              {question.difficulty}
            </DifficultyTag>
            <TitleText completed={completedQuestions.has(question.title)}>
              {question.title}
            </TitleText>
          </QuestionTitle>
        }
        key={question.id}
      >
        <Section>
          <SectionTitle>Description</SectionTitle>
          <p>{question.description}</p>
        </Section>

        <Section>
          <SectionTitle>Sample Input</SectionTitle>
          <CodeBlock>{question.sampleInput}</CodeBlock>
        </Section>

        <Section>
          <SectionTitle>Sample Output</SectionTitle>
          <CodeBlock>{question.sampleOutput}</CodeBlock>
        </Section>
      </Panel>
    </QuestionCard>
  ), [completedQuestions, toggleQuestion]);

  return (
    <Container>
      <ContentWrapper>
        <SearchBar>
          <Input
            size="large"
            placeholder="Search questions by title or description..."
            prefix={<SearchOutlined />}
            onChange={handleSearch}
            allowClear
          />
        </SearchBar>

        <StyledTabs 
          defaultActiveKey="all"
          onChange={handleTabChange}
          size="large"
        >
          <TabPane tab="All Questions" key="all">
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map(renderQuestion)
            ) : (
              <NoResults>No questions found matching your search criteria.</NoResults>
            )}
          </TabPane>
          <TabPane tab="Easy" key="easy">
            {filteredQuestions.filter(q => q.difficulty === 'Easy').map(renderQuestion)}
          </TabPane>
          <TabPane tab="Medium" key="medium">
            {filteredQuestions.filter(q => q.difficulty === 'Medium').map(renderQuestion)}
          </TabPane>
          <TabPane tab="Hard" key="hard">
            {filteredQuestions.filter(q => q.difficulty === 'Hard').map(renderQuestion)}
          </TabPane>
        </StyledTabs>
      </ContentWrapper>
    </Container>
  );
};

export default ProblemSet; 