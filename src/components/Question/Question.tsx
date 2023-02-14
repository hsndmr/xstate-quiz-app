import React from 'react';
import { QuestionProps } from '@/components/Question/question.interface';
import { useActor } from '@xstate/react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from '@mui/material';
import Answer from '@/components/Answer/Answer';

const Question: React.FC<QuestionProps> = ({ service }) => {
  const [state, send] = useActor(service);

  const { question, answers, selectedAnswer, prevQuestionIndex } =
    state.context;

  return (
    <>
      <Card
        elevation={0}
        sx={{
          padding: 2,
          border: `1px solid #ccc`,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            fontWeight="500"
            color="text.primary"
            gutterBottom
          >
            {question}
          </Typography>
          {answers.map((answer, index) => {
            return (
              <Answer
                onClick={() => {
                  send({
                    type: 'ANSWER',
                    answer: answer,
                  });
                }}
                key={answer.id}
                content={answer.answer}
                index={index}
                selected={selectedAnswer?.id === answer.id}
              />
            );
          })}
        </CardContent>
        <CardActions>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Button
                sx={{
                  visibility:
                    prevQuestionIndex === undefined ? 'hidden' : 'visible',
                }}
                onClick={() => {
                  send('PREV');
                }}
                size="large"
              >
                Prev
              </Button>
            </Grid>
            <Grid item>
              <Button
                disabled={!selectedAnswer}
                onClick={() => {
                  send('NEXT');
                }}
                size="large"
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </>
  );
};

export default Question;
