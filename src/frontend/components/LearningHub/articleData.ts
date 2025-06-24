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
  },

  // Operating System Articles
  {
    id: 'os1',
    title: 'Operating System Fundamentals',
    description: 'Learn core OS concepts including processes, threads, memory management, and file systems.',
    link: 'https://www.geeksforgeeks.org/operating-systems/',
    language: 'OS'
  },
  {
    id: 'os2',
    title: 'Process Management & Scheduling',
    description: 'Deep dive into process states, scheduling algorithms, and CPU scheduling concepts.',
    link: 'https://www.tutorialspoint.com/operating_system/os_process_scheduling.htm',
    language: 'OS'
  },
  {
    id: 'os3',
    title: 'Memory Management in OS',
    description: 'Understanding virtual memory, paging, segmentation, and memory allocation strategies.',
    link: 'https://www.javatpoint.com/memory-management-in-operating-system',
    language: 'OS'
  },

  // Object-Oriented Programming Articles
  {
    id: 'oop1',
    title: 'OOP Core Concepts',
    description: 'Master the four pillars of OOP: Encapsulation, Inheritance, Polymorphism, and Abstraction.',
    link: 'https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/',
    language: 'OOP'
  },
  {
    id: 'oop2',
    title: 'SOLID Principles',
    description: 'Learn the five SOLID principles for writing maintainable and scalable object-oriented code.',
    link: 'https://www.digitalocean.com/community/conceptual-articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design',
    language: 'OOP'
  },
  {
    id: 'oop3',
    title: 'Design Patterns in OOP',
    description: 'Explore common design patterns: Creational, Structural, and Behavioral patterns.',
    link: 'https://refactoring.guru/design-patterns',
    language: 'OOP'
  },

  // System Design Articles
  {
    id: 'sd1',
    title: 'System Design Fundamentals',
    description: 'Learn key concepts of distributed systems, scalability, and high availability.',
    link: 'https://github.com/donnemartin/system-design-primer',
    language: 'System Design'
  },
  {
    id: 'sd2',
    title: 'Microservices Architecture',
    description: 'Understanding microservices patterns, communication, and deployment strategies.',
    link: 'https://microservices.io/patterns/index.html',
    language: 'System Design'
  },
  {
    id: 'sd3',
    title: 'Database Design & Scaling',
    description: 'Master database sharding, replication, and choosing the right database for your system.',
    link: 'https://www.educative.io/blog/database-design-tutorial',
    language: 'System Design'
  }
]; 