import React, { useState, useMemo } from 'react';
import { articles } from './articleData';
import { Article, Language, Section } from './types';
import {
  Container,
  Header,
  Title,
  SearchContainer,
  SearchInput,
  SectionContainer,
  SectionTitle,
  ArticlesGrid,
  ArticleCard,
  ArticleTitle,
  ArticleDescription,
  ArticleLink
} from './LearningHubStyles';

const LearningHub: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredArticles = useMemo(() => {
    if (!searchTerm.trim()) return articles;

    const lowerSearchTerm = searchTerm.toLowerCase();
    return articles.filter(article =>
      article.title.toLowerCase().includes(lowerSearchTerm) ||
      article.description.toLowerCase().includes(lowerSearchTerm)
    );
  }, [searchTerm]);

  const sections = useMemo(() => {
    const grouped: { [key in Language]?: Article[] } = {};
    filteredArticles.forEach(article => {
      if (!grouped[article.language]) {
        grouped[article.language] = [];
      }
      grouped[article.language]?.push(article);
    });

    return (['C', 'Java', 'Python'] as const).map(language => ({
      language,
      articles: grouped[language] || []
    }));
  }, [filteredArticles]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container>
      <Header>
        <Title>Learning Hub</Title>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </SearchContainer>
      </Header>

      {sections.map((section: Section) => (
        <SectionContainer key={section.language}>
          <SectionTitle>{section.language}</SectionTitle>
          <ArticlesGrid>
            {section.articles.map(article => (
              <ArticleCard key={article.id}>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleDescription>{article.description}</ArticleDescription>
                <ArticleLink
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </ArticleLink>
              </ArticleCard>
            ))}
          </ArticlesGrid>
        </SectionContainer>
      ))}
    </Container>
  );
};

export default LearningHub;
