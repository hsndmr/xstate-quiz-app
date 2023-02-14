import { assign, createMachine, spawn } from 'xstate';
import {
  QuizContext,
  QuizEvent,
  QuizServiceSchema,
} from '@/features/Quiz/quiz-machine.types';
import { questionMachine } from '@/components/Question/question-machine';

export const quizMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QEcCuBLAXgOnRANmAMQQD2AdmLuQG6kDWVaWuBYC6tpAxgIYAu6CgG0ADAF0x4xKAAOpWOkEUZIAB6IATADZt2AJwBWAMwB2UwBZjo-QA5NlwwBoQATy2i9ogIy-To0TMLI30AX1CXZhwAJzBeCE4oIgA5AFEADQAVKVV5RWVyVQ0EYztsQ1NbYwtgh00LTW8LF3cEW29sC3btQ30G+01q73DIjBxeclgAdzBYiCIAQWSAZQB1VIAlHKQQPKUhQp3inT0jM0trOwcLZzdEb2MO-W0u7WNbbUbrQ1twiJByKQIHBVFFcgp9iojogALTaFqw7QjEBRViEcH5A5FRANBEITSiCzlTS2Qw-R59T5hf6o2LxRIYyGHUDFQw+Az6Z66UT+bymRqmPEPInPLrmHnaUx2GrI1ETaazSCMgrYhAPPS2UT1Bo6dr6by3Vq2UzlT4EwbeQLeK6ysbYbikAC2skI-CVOz2KuhbVs2CltgD+h5tis-KFFi8N3eVq6+uMSL+QA */
  createMachine(
    {
      id: 'quiz',
      initial: 'idle',
      context: {
        questions: [],
        currentQuestionIndex: 0,
        countCorrectAnswers: 0,
      } as QuizContext,
      schema: {
        services: {} as QuizServiceSchema,
        events: {} as QuizEvent,
      },
      tsTypes: {} as import('./quiz-machine.typegen').Typegen0,
      states: {
        idle: {
          invoke: {
            src: 'fetchQuestions',
            onDone: {
              target: 'reading',
              actions: 'assignQuestionsToContext',
            },
          },
        },
        reading: {
          on: {
            NEXT: [
              {
                target: 'checking',
                cond: 'isAnsweredAllQuestions',
              },
              {
                target: 'reading',
                actions: 'nextQuestion',
              },
            ],
            PREV: {
              target: 'reading',
              actions: 'prevQuestion',
            },
          },
        },
        checking: {
          entry: 'checkAnswers',
          always: 'showingResults',
        },
        showingResults: {
          on: {
            RESET: {
              target: 'idle',
            },
          },
        },
      },
    },
    {
      actions: {
        assignQuestionsToContext: assign((context, event) => {
          const countQuestions = event.data.length - 1;
          return {
            questions: event.data.map((question, index) => {
              return spawn(
                questionMachine.withContext({
                  ...question,
                  nextQuestionIndex:
                    index === countQuestions ? undefined : index + 1,
                  prevQuestionIndex: index === 0 ? undefined : index - 1,
                  currentQuestionIndex: index,
                }),
              );
            }),
            countCorrectAnswers: 0,
            currentQuestionIndex: 0,
          };
        }),
        nextQuestion: assign((context, event) => {
          return {
            currentQuestionIndex: event.nextQuestionIndex,
          };
        }),
        prevQuestion: assign((context, event) => {
          return {
            currentQuestionIndex: event.prevQuestionIndex,
          };
        }),
        checkAnswers: assign((context) => {
          let countCorrectAnswers = 0;

          context.questions.forEach((question) => {
            const questionSnapshot = question.getSnapshot();
            const questionContext = questionSnapshot?.context;

            if (questionContext?.selectedAnswer?.isCorrect) {
              countCorrectAnswers++;
            }
            question.send('CLOSE');
          });
          return {
            countCorrectAnswers,
          };
        }),
      },
      guards: {
        isAnsweredAllQuestions: (context, event) => {
          return event.nextQuestionIndex === undefined;
        },
      },
    },
  );
