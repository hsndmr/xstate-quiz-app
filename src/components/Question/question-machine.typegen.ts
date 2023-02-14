// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true;
  internalEvents: {
    'xstate.init': { type: 'xstate.init' };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: never;
  };
  eventsCausingActions: {
    assignSelectedAnswerToContext: 'ANSWER';
    nextQuestion: 'NEXT';
    prevQuestion: 'PREV';
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {
    canPrevQuestion: 'PREV';
  };
  eventsCausingServices: {};
  matchesStates: 'answered' | 'closed' | 'idle';
  tags: never;
}
