import { IAnswer, IQuestion } from '@/types/models/question';

export type QuestionContext = {
  nextQuestionIndex?: number;
  prevQuestionIndex?: number;
  currentQuestionIndex: number;
} & Omit<IQuestion, 'ref'>;

export type QuestionEvent =
  | { type: 'ANSWER'; answer: IAnswer }
  | { type: 'NEXT' }
  | { type: 'PREV' }
  | { type: 'CLOSE' };
