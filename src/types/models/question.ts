import { ActorRefFrom } from 'xstate';
import { questionMachine } from '@/components/Question/question-machine';

export interface IQuestion {
  id: number;
  question: string;
  answers: IAnswer[];
  selectedAnswer?: IAnswer;
  ref?: ActorRefFrom<typeof questionMachine>;
}

export interface IAnswer {
  id: number;
  answer: string;
  isCorrect?: boolean;
}
