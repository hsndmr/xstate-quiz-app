import { useMachine } from '@xstate/react';
import { quizMachine } from '@/features/Quiz/quiz-machine';
import { questions as data } from '@/constans/questions';
import Question from '@/components/Question/Question';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Swiper as BaseSwier } from 'swiper';

import 'swiper/css';
import { Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import QuizResult from '@/components/QuizResult/QuizResult';

const SLIDE_SPEED = 1000;

const Quiz = () => {
  const [controlledSwiper, setControlledSwiper] = useState<BaseSwier | null>(
    null,
  );

  const [state, send] = useMachine(quizMachine, {
    services: {
      fetchQuestions: async () => {
        return data;
      },
    },
  });

  const { currentQuestionIndex, questions, countCorrectAnswers } =
    state.context;

  const renderQuestions = () => {
    return (
      <Swiper
        style={{
          maxWidth: '600px',
        }}
        slidesPerView={1}
        spaceBetween={30}
        onSwiper={setControlledSwiper}
        modules={[Controller]}
        allowTouchMove={false}
      >
        {questions.map((question, index) => {
          return (
            <SwiperSlide key={index}>
              <Question service={question} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  };

  const renderQuizResult = () => {
    return (
      <QuizResult
        countQuestions={questions.length}
        countCorrectAnswers={countCorrectAnswers}
        onResetQuiz={() => {
          send('RESET');
        }}
      />
    );
  };

  const renderLoading = () => {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress />
      </Box>
    );
  };

  useEffect(() => {
    if (!controlledSwiper) {
      return;
    }

    if (currentQuestionIndex !== controlledSwiper.activeIndex) {
      controlledSwiper.slideTo(currentQuestionIndex, SLIDE_SPEED);
    }
  }, [currentQuestionIndex, controlledSwiper]);

  return (
    <Box
      sx={{
        maxWidth: '600px',
      }}
      marginTop={5}
      marginX={'auto'}
    >
      {state.matches('idle') && renderLoading()}
      {['reading', 'result'].some(state.matches) && renderQuestions()}
      {state.matches('checking') && <div>Checking...</div>}
      {state.matches('showingResults') && renderQuizResult()}
    </Box>
  );
};

export default Quiz;
