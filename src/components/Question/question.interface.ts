import { ActorRefFrom } from 'xstate';
import { questionMachine } from '@/components/Question/question-machine';

export interface QuestionProps {
  service: ActorRefFrom<typeof questionMachine>;
}
