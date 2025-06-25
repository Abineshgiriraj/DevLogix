export interface Question {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  sampleInput: string;
  sampleOutput: string;
  topic?: string;
}

// Add topic tags for better organization
export const topics = [
  'Arrays',
  'Strings',
  'Linked Lists',
  'Trees',
  'Graphs',
  'Dynamic Programming',
  'Sorting',
  'Searching',
  'Math',
  'Bit Manipulation',
  'Stack',
  'Queue',
  'Heap',
  'Hash Table',
  'Two Pointers',
  'Binary Search',
  'Recursion',
  'Backtracking'
];

export const questions: Question[] = [
  // Easy Questions (40)
  {
    id: 1,
    title: "Reverse String In-Place",
    difficulty: "Easy",
    description: "Write a function that reverses a string in-place. The input string is given as an array of characters.",
    sampleInput: "['h','e','l','l','o']",
    sampleOutput: "['o','l','l','e','h']",
    topic: "Strings"
  },
  {
    id: 2,
    title: "Valid Palindrome",
    difficulty: "Easy",
    description: "Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.",
    sampleInput: "A man, a plan, a canal: Panama",
    sampleOutput: "true",
    topic: "Strings"
  },
  {
    id: 3,
    title: "Binary Search",
    difficulty: "Easy",
    description: "Implement binary search to find a target value in a sorted array. Return the index if found, otherwise return -1.",
    sampleInput: "nums = [-1,0,3,5,9,12], target = 9",
    sampleOutput: "4",
    topic: "Binary Search"
  },
  {
    id: 4,
    title: "Maximum Subarray Sum",
    difficulty: "Easy",
    description: "Find the contiguous subarray within an array (containing at least one number) which has the largest sum.",
    sampleInput: "[-2,1,-3,4,-1,2,1,-5,4]",
    sampleOutput: "6 (subarray [4,-1,2,1])",
    topic: "Arrays"
  },
  {
    id: 5,
    title: "First Unique Character",
    difficulty: "Easy",
    description: "Given a string, find the first non-repeating character and return its index. If it doesn't exist, return -1.",
    sampleInput: "leetcode",
    sampleOutput: "0",
    topic: "Hash Table"
  },
  {
    id: 6,
    title: "Merge Sorted Arrays",
    difficulty: "Easy",
    description: "Merge two sorted arrays into a single sorted array. The first array has enough space at the end to hold the second array.",
    sampleInput: "nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3",
    sampleOutput: "[1,2,2,3,5,6]",
    topic: "Arrays"
  },
  {
    id: 7,
    title: "Count Bits",
    difficulty: "Easy",
    description: "Given a non-negative integer n, count the number of 1's in its binary representation.",
    sampleInput: "5",
    sampleOutput: "2 (binary: 101)",
    topic: "Bit Manipulation"
  },
  {
    id: 8,
    title: "Valid Parentheses",
    difficulty: "Easy",
    description: "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    sampleInput: "()[]{}", 
    sampleOutput: "true",
    topic: "Stack"
  },
  {
    id: 9,
    title: "Climbing Stairs",
    difficulty: "Easy",
    description: "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
    sampleInput: "n = 3",
    sampleOutput: "3",
    topic: "Dynamic Programming"
  },
  {
    id: 10,
    title: "Remove Duplicates",
    difficulty: "Easy",
    description: "Remove duplicates from a sorted array in-place. Return the new length.",
    sampleInput: "[1,1,2,2,3,4,4]",
    sampleOutput: "4, array becomes [1,2,3,4,_,_,_]",
    topic: "Arrays"
  },
  // More Easy questions...

  // More Easy Questions
  {
    id: 11,
    title: "Fibonacci Number",
    difficulty: "Easy",
    description: "Calculate the nth Fibonacci number. The Fibonacci sequence is defined as: F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2) for n > 1.",
    sampleInput: "n = 4",
    sampleOutput: "3 (sequence: 0,1,1,2,3)",
    topic: "Math"
  },
  {
    id: 12,
    title: "Power of Two",
    difficulty: "Easy",
    description: "Given an integer n, return true if it is a power of two. Otherwise, return false.",
    sampleInput: "n = 16",
    sampleOutput: "true",
    topic: "Bit Manipulation"
  },
  {
    id: 13,
    title: "Linked List Cycle",
    difficulty: "Easy",
    description: "Given head, the head of a linked list, determine if the linked list has a cycle in it.",
    sampleInput: "head = [3,2,0,-4], pos = 1",
    sampleOutput: "true",
    topic: "Linked Lists"
  },
  {
    id: 14,
    title: "Symmetric Tree",
    difficulty: "Easy",
    description: "Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).",
    sampleInput: "[1,2,2,3,4,4,3]",
    sampleOutput: "true",
    topic: "Trees"
  },
  {
    id: 15,
    title: "Missing Number",
    difficulty: "Easy",
    description: "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
    sampleInput: "nums = [3,0,1]",
    sampleOutput: "2",
    topic: "Arrays"
  },
  // More Easy Questions

  // Medium Questions (35)
  {
    id: 41,
    title: "LRU Cache",
    difficulty: "Medium",
    description: "Design and implement a data structure for Least Recently Used (LRU) cache. It should support get and put operations.",
    sampleInput: "LRUCache cache = new LRUCache(2); cache.put(1, 1); cache.put(2, 2); cache.get(1);",
    sampleOutput: "1",
    topic: "Hash Table"
  },
  {
    id: 42,
    title: "Binary Tree Level Order Traversal",
    difficulty: "Medium",
    description: "Given a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).",
    sampleInput: "    3\n   / \\\n  9  20\n    /  \\\n   15   7",
    sampleOutput: "[[3],[9,20],[15,7]]",
    topic: "Trees"
  },
  {
    id: 43,
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    description: "Given a string s, find the longest palindromic substring in s.",
    sampleInput: "babad",
    sampleOutput: "bab",
    topic: "Dynamic Programming"
  },
  {
    id: 44,
    title: "Coin Change",
    difficulty: "Medium",
    description: "Given coins of different denominations and a total amount of money, find the fewest number of coins needed to make up that amount.",
    sampleInput: "coins = [1,2,5], amount = 11",
    sampleOutput: "3 (5 + 5 + 1)",
    topic: "Dynamic Programming"
  },
  {
    id: 45,
    title: "Search in Rotated Sorted Array",
    difficulty: "Medium",
    description: "Given a rotated sorted array and a target value, return the index if the target is found. If not, return -1.",
    sampleInput: "nums = [4,5,6,7,0,1,2], target = 0",
    sampleOutput: "4",
    topic: "Binary Search"
  },
  // More Medium questions...

  // More Medium Questions
  {
    id: 46,
    title: "Rotate Image",
    difficulty: "Medium",
    description: "You are given an n x n 2D matrix representing an image. Rotate the image by 90 degrees (clockwise) in-place.",
    sampleInput: "[[1,2,3],[4,5,6],[7,8,9]]",
    sampleOutput: "[[7,4,1],[8,5,2],[9,6,3]]",
    topic: "Arrays"
  },
  {
    id: 47,
    title: "Group Anagrams",
    difficulty: "Medium",
    description: "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
    sampleInput: "['eat','tea','tan','ate','nat','bat']",
    sampleOutput: "[['eat','tea','ate'],['tan','nat'],['bat']]",
    topic: "Hash Table"
  },
  {
    id: 48,
    title: "Spiral Matrix",
    difficulty: "Medium",
    description: "Given an m x n matrix, return all elements of the matrix in spiral order.",
    sampleInput: "[[1,2,3],[4,5,6],[7,8,9]]",
    sampleOutput: "[1,2,3,6,9,8,7,4,5]",
    topic: "Arrays"
  },
  {
    id: 49,
    title: "Jump Game",
    difficulty: "Medium",
    description: "Given an array of non-negative integers nums, you are initially positioned at the first index. Each element represents your maximum jump length at that position. Determine if you can reach the last index.",
    sampleInput: "nums = [2,3,1,1,4]",
    sampleOutput: "true",
    topic: "Dynamic Programming"
  },
  {
    id: 50,
    title: "Permutations",
    difficulty: "Medium",
    description: "Given an array nums of distinct integers, return all possible permutations. You can return the answer in any order.",
    sampleInput: "nums = [1,2,3]",
    sampleOutput: "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
    topic: "Backtracking"
  },
  // More Medium Questions

  // Hard Questions (25)
  {
    id: 76,
    title: "Regular Expression Matching",
    difficulty: "Hard",
    description: "Implement regular expression matching with support for '.' and '*'. The matching should cover the entire input string.",
    sampleInput: "s = 'aa', p = 'a*'",
    sampleOutput: "true",
    topic: "Dynamic Programming"
  },
  {
    id: 77,
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
    sampleInput: "nums1 = [1,3], nums2 = [2]",
    sampleOutput: "2.0",
    topic: "Binary Search"
  },
  {
    id: 78,
    title: "Longest Valid Parentheses",
    difficulty: "Hard",
    description: "Given a string containing just the characters '(' and ')', find the length of the longest valid parentheses substring.",
    sampleInput: ")()())",
    sampleOutput: "4",
    topic: "Dynamic Programming"
  },
  {
    id: 79,
    title: "Merge K Sorted Lists",
    difficulty: "Hard",
    description: "Merge k sorted linked lists and return it as one sorted list.",
    sampleInput: "[[1,4,5],[1,3,4],[2,6]]",
    sampleOutput: "[1,1,2,3,4,4,5,6]",
    topic: "Heap"
  },
  {
    id: 80,
    title: "Word Break II",
    difficulty: "Hard",
    description: "Given a string s and a dictionary of strings wordDict, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all possible sentences.",
    sampleInput: "s = 'catsanddog', wordDict = ['cat','cats','and','sand','dog']",
    sampleOutput: "['cats and dog','cat sand dog']",
    topic: "Dynamic Programming"
  },
  // More Hard questions...

  // More Hard Questions
  {
    id: 81,
    title: "Trapping Rain Water",
    difficulty: "Hard",
    description: "Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",
    sampleInput: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
    sampleOutput: "6",
    topic: "Two Pointers"
  },
  {
    id: 82,
    title: "N-Queens",
    difficulty: "Hard",
    description: "The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other. Return all distinct solutions.",
    sampleInput: "n = 4",
    sampleOutput: "[['.Q..','...Q','Q...','..Q.'],['..Q.','Q...','...Q','.Q..']]",
    topic: "Backtracking"
  },
  {
    id: 83,
    title: "Word Search II",
    difficulty: "Hard",
    description: "Given an m x n board of characters and a list of strings words, return all words on the board that exist in the dictionary.",
    sampleInput: "board = [['o','a','a','n'],['e','t','a','e'],['i','h','k','r'],['i','f','l','v']], words = ['oath','pea','eat','rain']",
    sampleOutput: "['eat','oath']",
    topic: "Trie"
  },
  {
    id: 84,
    title: "Sliding Window Maximum",
    difficulty: "Hard",
    description: "Given an array nums and a sliding window of size k moving from the very left to the very right, return the maximum element in each window.",
    sampleInput: "nums = [1,3,-1,-3,5,3,6,7], k = 3",
    sampleOutput: "[3,3,5,5,6,7]",
    topic: "Queue"
  },
  {
    id: 85,
    title: "Longest Consecutive Sequence",
    difficulty: "Hard",
    description: "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.",
    sampleInput: "nums = [100,4,200,1,3,2]",
    sampleOutput: "4",
    topic: "Arrays"
  },

  // Final Easy Questions
  {
    id: 16,
    title: "Path Sum",
    difficulty: "Easy",
    description: "Given the root of a binary tree and an integer targetSum, return true if there exists a root-to-leaf path such that adding up all the values along the path equals targetSum.",
    sampleInput: "root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22",
    sampleOutput: "true",
    topic: "Trees"
  },
  {
    id: 17,
    title: "Reverse Bits",
    difficulty: "Easy",
    description: "Reverse bits of a given 32 bits unsigned integer.",
    sampleInput: "n = 00000010100101000001111010011100",
    sampleOutput: "964176192 (00111001011110000010100101000000)",
    topic: "Bit Manipulation"
  },
  {
    id: 18,
    title: "Implement Queue using Stacks",
    difficulty: "Easy",
    description: "Implement a first in first out (FIFO) queue using only two stacks.",
    sampleInput: "push(1), push(2), peek(), pop(), empty()",
    sampleOutput: "1, 1, false",
    topic: "Stack"
  },
  // ... continue with remaining Easy questions

  // Final Medium Questions
  {
    id: 51,
    title: "Unique Paths",
    difficulty: "Medium",
    description: "A robot is located at the top-left corner of a m x n grid. The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid. How many possible unique paths are there?",
    sampleInput: "m = 3, n = 7",
    sampleOutput: "28",
    topic: "Dynamic Programming"
  },
  {
    id: 52,
    title: "Find First and Last Position",
    difficulty: "Medium",
    description: "Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.",
    sampleInput: "nums = [5,7,7,8,8,10], target = 8",
    sampleOutput: "[3,4]",
    topic: "Binary Search"
  },
  {
    id: 53,
    title: "Course Schedule",
    difficulty: "Medium",
    description: "There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai. Return true if you can finish all courses.",
    sampleInput: "numCourses = 2, prerequisites = [[1,0]]",
    sampleOutput: "true",
    topic: "Graphs"
  },
  // ... continue with remaining Medium questions

  // Final Hard Questions
  {
    id: 86,
    title: "Minimum Window Substring",
    difficulty: "Hard",
    description: "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string.",
    sampleInput: "s = 'ADOBECODEBANC', t = 'ABC'",
    sampleOutput: "'BANC'",
    topic: "Two Pointers"
  },
  {
    id: 87,
    title: "Serialize and Deserialize Binary Tree",
    difficulty: "Hard",
    description: "Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.",
    sampleInput: "root = [1,2,3,null,null,4,5]",
    sampleOutput: "[1,2,3,null,null,4,5]",
    topic: "Trees"
  },
  {
    id: 88,
    title: "Maximum Profit in Job Scheduling",
    difficulty: "Hard",
    description: "We have n jobs, where every job is scheduled to be done from startTime[i] to endTime[i], obtaining a profit of profit[i]. You're given the startTime, endTime and profit arrays, return the maximum profit you can take such that there are no two jobs in the subset with overlapping time range.",
    sampleInput: "startTime = [1,2,3,3], endTime = [3,4,5,6], profit = [50,10,40,70]",
    sampleOutput: "120",
    topic: "Dynamic Programming"
  },

  // Completing Easy Questions (40 total)
  {
    id: 19,
    title: "Intersection of Two Arrays",
    difficulty: "Easy",
    description: "Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.",
    sampleInput: "nums1 = [1,2,2,1], nums2 = [2,2]",
    sampleOutput: "[2,2]",
    topic: "Hash Table"
  },
  {
    id: 20,
    title: "Convert Binary Number in Linked List to Integer",
    difficulty: "Easy",
    description: "Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number. Return the decimal value of the number in the linked list.",
    sampleInput: "head = [1,0,1]",
    sampleOutput: "5",
    topic: "Linked Lists"
  },

  // Completing Medium Questions (35 total)
  {
    id: 54,
    title: "Kth Largest Element",
    difficulty: "Medium",
    description: "Given an integer array nums and an integer k, return the kth largest element in the array. Note that it is the kth largest element in the sorted order, not the kth distinct element.",
    sampleInput: "nums = [3,2,1,5,6,4], k = 2",
    sampleOutput: "5",
    topic: "Heap"
  },
  {
    id: 55,
    title: "Find All Anagrams",
    difficulty: "Medium",
    description: "Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.",
    sampleInput: "s = 'cbaebabacd', p = 'abc'",
    sampleOutput: "[0,6]",
    topic: "Sliding Window"
  },

  // Completing Hard Questions (25 total)
  {
    id: 89,
    title: "Alien Dictionary",
    difficulty: "Hard",
    description: "Given a sorted dictionary of an alien language having N words and k starting alphabets of standard dictionary. Find the order of characters in the alien language.",
    sampleInput: "words = ['wrt','wrf','er','ett','rftt']",
    sampleOutput: "'wertf'",
    topic: "Graphs"
  },
  {
    id: 90,
    title: "Bus Routes",
    difficulty: "Hard",
    description: "You are given an array routes representing bus routes where routes[i] is a bus route that the ith bus repeats forever. Return the least number of buses we must take to reach the target. Return -1 if it is not possible.",
    sampleInput: "routes = [[1,2,7],[3,6,7]], source = 1, target = 6",
    sampleOutput: "2",
    topic: "Graphs"
  },

  // Final Easy Questions to reach 40
  {
    id: 23,
    title: "Min Stack",
    difficulty: "Easy",
    description: "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.",
    sampleInput: "MinStack minStack = new MinStack(); minStack.push(-2); minStack.push(0); minStack.push(-3);",
    sampleOutput: "minStack.getMin() -> -3",
    topic: "Stack"
  },
  {
    id: 24,
    title: "Palindrome Linked List",
    difficulty: "Easy",
    description: "Given the head of a singly linked list, return true if it is a palindrome or false otherwise.",
    sampleInput: "head = [1,2,2,1]",
    sampleOutput: "true",
    topic: "Linked Lists"
  },
  {
    id: 25,
    title: "Range Sum Query - Immutable",
    difficulty: "Easy",
    description: "Given an integer array nums, handle multiple queries of the following type: Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.",
    sampleInput: "NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]); numArray.sumRange(0, 2);",
    sampleOutput: "1",
    topic: "Arrays"
  },

  // Final Medium Questions to reach 35
  {
    id: 58,
    title: "Longest Increasing Subsequence",
    difficulty: "Medium",
    description: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
    sampleInput: "nums = [10,9,2,5,3,7,101,18]",
    sampleOutput: "4",
    topic: "Dynamic Programming"
  },
  {
    id: 59,
    title: "Design Twitter",
    difficulty: "Medium",
    description: "Design a simplified version of Twitter where users can post tweets, follow/unfollow another user, and see the 10 most recent tweets in the user's news feed.",
    sampleInput: "Twitter twitter = new Twitter(); twitter.postTweet(1, 5); twitter.getNewsFeed(1);",
    sampleOutput: "[5]",
    topic: "Design"
  },
  {
    id: 60,
    title: "Find K Pairs with Smallest Sums",
    difficulty: "Medium",
    description: "You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k. Define a pair (u, v) which consists of one element from the first array and one element from the second array. Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.",
    sampleInput: "nums1 = [1,7,11], nums2 = [2,4,6], k = 3",
    sampleOutput: "[[1,2],[1,4],[1,6]]",
    topic: "Heap"
  },

  // Final Hard Questions to reach 25
  {
    id: 96,
    title: "Palindrome Pairs",
    difficulty: "Hard",
    description: "Given a list of unique words, return all the pairs of the distinct indices (i, j) in the given list, so that the concatenation of the two words words[i] + words[j] is a palindrome.",
    sampleInput: "words = ['abcd','dcba','lls','s','sssll']",
    sampleOutput: "[[0,1],[1,0],[3,2],[2,4]]",
    topic: "Hash Table"
  },
  {
    id: 97,
    title: "Count of Smaller Numbers After Self",
    difficulty: "Hard",
    description: "Given an integer array nums, return an integer array counts where counts[i] is the number of smaller elements to the right of nums[i].",
    sampleInput: "nums = [5,2,6,1]",
    sampleOutput: "[2,1,1,0]",
    topic: "Binary Search Tree"
  },
  {
    id: 98,
    title: "Best Time to Buy and Sell Stock IV",
    difficulty: "Hard",
    description: "You are given an integer array prices where prices[i] is the price of a given stock on the ith day, and an integer k. Find the maximum profit you can achieve. You may complete at most k transactions.",
    sampleInput: "k = 2, prices = [3,2,6,5,0,3]",
    sampleOutput: "7",
    topic: "Dynamic Programming"
  },
  {
    id: 99,
    title: "Distinct Subsequences",
    difficulty: "Hard",
    description: "Given two strings s and t, return the number of distinct subsequences of s which equals t.",
    sampleInput: "s = 'rabbbit', t = 'rabbit'",
    sampleOutput: "3",
    topic: "Dynamic Programming"
  },
  {
    id: 100,
    title: "Longest Valid Parentheses",
    difficulty: "Hard",
    description: "Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.",
    sampleInput: "s = ')()())'",
    sampleOutput: "4",
    topic: "Stack"
  }
]; 