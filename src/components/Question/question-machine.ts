import { assign, createMachine } from 'xstate';
import { sendParent } from 'xstate/lib/actions';
import { QuestionContext, QuestionEvent } from './question-machine.types';

export const questionMachine = createMachine(
  {
    id: 'question',
    initial: 'idle',
    context: {} as QuestionContext,
    schema: {
      events: {} as QuestionEvent,
    },
    tsTypes: {} as import('./question-machine.typegen').Typegen0,
    states: {
      idle: {
        on: {
          ANSWER: {
            target: 'answered',
            actions: 'assignSelectedAnswerToContext',
          },
          PREV: {
            target: 'idle',
            actions: 'prevQuestion',
            cond: 'canPrevQuestion',
          },
        },
      },
      answered: {
        on: {
          ANSWER: {
            target: 'answered',
            actions: 'assignSelectedAnswerToContext',
          },
          NEXT: {
            target: 'answered',
            actions: 'nextQuestion',
          },
          PREV: {
            target: 'answered',
            actions: 'prevQuestion',
            cond: 'canPrevQuestion',
          },
          CLOSE: {
            target: 'closed',
          },
        },
      },
      closed: {
        type: 'final',
      },
    },
  },
  {
    actions: {
      assignSelectedAnswerToContext: assign((context, event) => {
        return {
          selectedAnswer: event.answer,
        };
      }),
      nextQuestion: sendParent((context) => ({
        type: 'NEXT',
        nextQuestionIndex: context.nextQuestionIndex,
      })),
      prevQuestion: sendParent((context) => ({
        type: 'PREV',
        prevQuestionIndex: context.prevQuestionIndex,
      })),
    },
    guards: {
      canPrevQuestion: (context) => {
        return context.prevQuestionIndex !== undefined;
      },
    },
  },
);
