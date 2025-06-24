import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Empty, Spin } from 'antd';
import styled from 'styled-components';
import { COLORS } from '../../utils/Colors';
import LogItem from './LogItem';

const CreativeWrapper = styled.div`
  width: calc(100% - 250px);
  margin-left: 250px;
  min-height: calc(100vh - 64px);
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(135deg, ${COLORS.Primary}10 0%, ${COLORS.Accent}10 100%);
    z-index: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    padding: 1rem;
  }
`;

const HeaderSection = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  margin-bottom: 2rem;
  padding: 2rem 0;

  h1 {
    font-size: 2.5rem;
    color: ${COLORS.Primary};
    margin-bottom: 0.5rem;
    font-weight: 600;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  p {
    color: ${COLORS.Secondary};
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ContentSection = styled.div`
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  gap: 1rem;

  p {
    color: ${COLORS.Secondary};
    font-size: 1rem;
  }
`;

const EmptyStateWrapper = styled.div`
  padding: 2rem;
  text-align: center;

  .ant-empty {
    margin: 2rem 0;
  }

  p {
    color: ${COLORS.Secondary};
    font-size: 1rem;
    margin-top: 1rem;
  }
`;

const LogsGrid = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CreativeLogs: React.FC = () => {
  const { logs: logsData, loading } = useSelector(
    ({ logState }: RootState) => logState
  );

  if (loading && !logsData.length) {
    return (
      <CreativeWrapper>
        <HeaderSection>
          <h1>Activity Logs</h1>
          <p>Track your preparation journey with detailed activity logs</p>
        </HeaderSection>
        <LoaderWrapper>
          <Spin size="large" />
          <p>Loading your activity logs...</p>
        </LoaderWrapper>
      </CreativeWrapper>
    );
  }

  return (
    <CreativeWrapper>
      <HeaderSection>
        <h1>Activity Logs</h1>
        <p>Track your preparation journey with detailed activity logs</p>
      </HeaderSection>

      <ContentSection>
        {!logsData.length ? (
          <EmptyStateWrapper>
            <Empty
              description={
                <div>
                  <h3>No Activity Logs Found</h3>
                  <p>Start tracking your preparation activities to see them here</p>
                </div>
              }
            />
          </EmptyStateWrapper>
        ) : (
          <LogsGrid>
            {logsData.map((log) => (
              <LogItem key={log._id} log={log} />
            ))}
          </LogsGrid>
        )}
      </ContentSection>
    </CreativeWrapper>
  );
};

export default CreativeLogs; 