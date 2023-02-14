import { IQuestion } from '@/types/models/question';
import { ActorRefFrom } from 'xstate';
import { questionMachine } from '@/components/Question/question-machine';

export interface QuizContext {
  questions: ActorRefFrom<typeof questionMachine>[];
  currentQuestionIndex: number;
  countCorrectAnswers: number;
}

export type QuizEvent =
  | {
      type: 'NEXT';
      nextQuestionIndex: number;
    }
  | { type: 'PREV'; prevQuestionIndex: number }
  | { type: 'CLOSE' }
  | { type: 'RESET' };

export type QuizServiceSchema = {
  fetchQuestions: {
    data: IQuestion[];
  };
};
