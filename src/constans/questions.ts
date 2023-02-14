import { IQuestion } from '@/types/models/question';

export const questions: IQuestion[] = [
  {
    id: 1,
    question: 'What is the capital of France?',
    answers: [
      { id: 1, answer: 'New York' },
      { id: 2, answer: 'London' },
      { id: 3, answer: 'Paris', isCorrect: true },
      { id: 4, answer: 'Dublin' },
    ],
  },
  {
    id: 2,
    question: 'What is the capital of Spain?',
    answers: [
      { id: 1, answer: 'Madrid', isCorrect: true },
      { id: 2, answer: 'Berlin' },
      { id: 3, answer: 'Paris' },
      { id: 4, answer: 'Rome' },
    ],
  },
  {
    id: 3,
    question: 'What is the capital of Germany?',
    answers: [
      { id: 2, answer: 'Paris' },
      { id: 3, answer: 'London' },
      { id: 4, answer: 'Rome' },
      { id: 1, answer: 'Berlin', isCorrect: true },
    ],
  },
  {
    id: 4,
    question: 'What is the capital of Italy?',
    answers: [
      { id: 2, answer: 'Berlin' },
      { id: 1, answer: 'Rome', isCorrect: true },
      { id: 3, answer: 'Paris' },
      { id: 4, answer: 'London' },
    ],
  },
  {
    id: 5,
    question: 'What is the capital of Poland?',
    answers: [
      { id: 2, answer: 'Berlin' },
      { id: 1, answer: 'Warsaw', isCorrect: true },
      { id: 3, answer: 'Paris' },
      { id: 4, answer: 'London' },
    ],
  },
  {
    id: 6,
    question: 'What is the capital of Ireland?',
    answers: [
      { id: 1, answer: 'Dublin', isCorrect: true },
      { id: 2, answer: 'Berlin' },
      { id: 3, answer: 'Paris' },
      { id: 4, answer: 'London' },
    ],
  },
  {
    id: 7,
    question: 'What is the capital of the Turkey',
    answers: [
      { id: 2, answer: 'Berlin' },
      { id: 3, answer: 'Paris' },
      { id: 4, answer: 'London' },
      { id: 1, answer: 'Ankara', isCorrect: true },
    ],
  },
  {
    id: 8,
    question: 'What is the capital of the Netherlands',
    answers: [
      { id: 1, answer: 'Amsterdam', isCorrect: true },
      { id: 2, answer: 'Berlin' },
      { id: 3, answer: 'Paris' },
      { id: 4, answer: 'London' },
    ],
  },
  {
    id: 9,
    question: 'What is the capital of the Greece',
    answers: [
      { id: 2, answer: 'Berlin' },
      { id: 3, answer: 'Paris' },
      { id: 4, answer: 'London' },
      { id: 1, answer: 'Athens', isCorrect: true },
    ],
  },
  {
    id: 10,
    question: 'What is the capital of the Portugal',
    answers: [
      { id: 2, answer: 'Berlin' },
      { id: 3, answer: 'Paris' },
      { id: 1, answer: 'Lisbon', isCorrect: true },
      { id: 4, answer: 'London' },
    ],
  },
];
