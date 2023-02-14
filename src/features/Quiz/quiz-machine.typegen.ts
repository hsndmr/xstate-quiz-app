// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  internalEvents: {
    'done.invoke.quiz.idle:invocation[0]': {
      type: 'done.invoke.quiz.idle:invocation[0]';
      data: unknown;
      __tip: 'See the XState TS docs to learn how to strongly type this.';
    };
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {
    fetchQuestions: 'done.invoke.quiz.idle:invocation[0]';
  };
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: 'fetchQuestions';
  };
  eventsCausingActions: {
    assignQuestionsToContext: 'done.invoke.quiz.idle:invocation[0]';
    checkAnswers: 'NEXT';
    nextQuestion: 'NEXT';
    prevQuestion: 'PREV';
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {
    isAnsweredAllQuestions: 'NEXT';
  };
  eventsCausingServices: {
    fetchQuestions: 'RESET' | 'xstate.init';
  };
  matchesStates: 'checking' | 'idle' | 'reading' | 'showingResults';
  tags: never;
}
