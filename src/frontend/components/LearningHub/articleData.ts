import { Article } from './types';

export const articles: Article[] = [
  // C Language Articles
  {
    id: 'c1',
    title: 'C Programming Fundamentals',
    description: 'A comprehensive guide to C programming basics including variables, data types, control structures, and functions.',
    link: 'https://www.learn-c.org/',
    language: 'C'
  },
  {
    id: 'c2',
    title: 'Memory Management in C',
    description: 'Deep dive into memory management, pointers, dynamic allocation, and common memory-related issues in C.',
    link: 'https://www.geeksforgeeks.org/memory-management-in-c/',
    language: 'C'
  },
  {
    id: 'c3',
    title: 'Data Structures Implementation in C',
    description: 'Learn how to implement various data structures like linked lists, trees, and graphs in C.',
    link: 'https://www.programiz.com/dsa',
    language: 'C'
  },

  // Java Articles
  {
    id: 'java1',
    title: 'Java Core Concepts',
    description: 'Master Java fundamentals including OOP concepts, collections, and exception handling.',
    link: 'https://dev.java/learn/',
    language: 'Java'
  },
  {
    id: 'java2',
    title: 'Spring Framework Tutorial',
    description: 'Comprehensive guide to building enterprise applications with Spring Framework.',
    link: 'https://spring.io/guides',
    language: 'Java'
  },
  {
    id: 'java3',
    title: 'Java Design Patterns',
    description: 'Learn common design patterns and their implementation in Java with practical examples.',
    link: 'https://refactoring.guru/design-patterns/java',
    language: 'Java'
  },

  // Python Articles
  {
    id: 'python1',
    title: 'Python for Beginners',
    description: 'Start your Python journey with basics, syntax, and essential programming concepts.',
    link: 'https://www.python.org/about/gettingstarted/',
    language: 'Python'
  },
  {
    id: 'python2',
    title: 'Data Science with Python',
    description: 'Learn data analysis, visualization, and machine learning using Python libraries.',
    link: 'https://pandas.pydata.org/docs/getting_started/',
    language: 'Python'
  },
  {
    id: 'python3',
    title: 'Web Development with Django',
    description: 'Build web applications using Django framework with Python.',
    link: 'https://www.djangoproject.com/start/',
    language: 'Python'
  }
]; 