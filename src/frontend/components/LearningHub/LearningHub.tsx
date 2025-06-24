import React, { useState, useMemo } from 'react';
import { articles } from './articleData';
import { Article } from './types';
import {
  Wrapper,
  SearchContainer,
  CategorySection,
  CategoryTitle,
  ArticlesGrid,
  ArticleCard,
  ArticleTitle,
  ArticleDescription,
  ArticleSource,
  ReadMoreButton,
  CardFooter,
} from './LearningHubStyles';
import Header from '../Header/Header';

const LearningHub: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = useMemo(() => {
    if (!searchQuery.trim()) return articles;

    const query = searchQuery.toLowerCase();
    return articles.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.description.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const categories = useMemo(() => {
    return [...new Set(articles.map(article => article.category))].sort();
  }, []);

  const articlesByCategory = useMemo(() => {
    return categories.reduce<Record<string, Article[]>>((acc, category) => {
      acc[category] = filteredArticles.filter(
        article => article.category === category
      );
      return acc;
    }, {});
  }, [categories, filteredArticles]);

  return (
    <Wrapper>
      <Header title="Learning Hub" />
      
      <SearchContainer>
        <input
          type="text"
          placeholder="Search articles by title, description, or category..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search articles"
        />
      </SearchContainer>

      {categories.map((category) => (
        <CategorySection key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          <ArticlesGrid>
            {articlesByCategory[category].map((article) => (
              <ArticleCard key={article.id}>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleDescription>{article.description}</ArticleDescription>
                <CardFooter>
                  <ArticleSource>Source: {article.source}</ArticleSource>
                  <ReadMoreButton
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read more about ${article.title}`}
                  >
                    Read More
                  </ReadMoreButton>
                </CardFooter>
              </ArticleCard>
            ))}
          </ArticlesGrid>
        </CategorySection>
      ))}
    </Wrapper>
  );
};

export default LearningHub;
