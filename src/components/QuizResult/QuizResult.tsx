import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import React from 'react';
import { QuizResultProps } from '@/components/QuizResult/quiz-result.interface';

const QuizResult: React.FC<QuizResultProps> = ({
  countCorrectAnswers,
  countQuestions,
  onResetQuiz,
}) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Quiz Results</Typography>
        <Box
          sx={{
            marginTop: 2,
          }}
        >
          <Typography color="green" fontWeight="bold" variant="body1">
            Correct: {countCorrectAnswers}
          </Typography>
          <Typography color="red" fontWeight="bold" variant="body1">
            Incorrect: {countQuestions - countCorrectAnswers}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button onClick={onResetQuiz}>Reset Quiz</Button>
      </CardActions>
    </Card>
  );
};

export default QuizResult;
