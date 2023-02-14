import React from 'react';
import { AnswerProps } from '@/components/Answer/answer.interface';
import { Box, Grid, Typography } from '@mui/material';

const Answer: React.FC<AnswerProps> = ({
  content,
  index,
  selected,
  ...props
}) => {
  const answerLetter = () => {
    return String.fromCharCode(65 + index);
  };

  return (
    <Box
      paddingX={2}
      paddingY={1}
      marginY={3}
      sx={{
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: selected ? 'white' : 'grey.300',
        borderRadius: 4,
        width: 'auto',
        color: selected ? 'white' : 'black',
        backgroundColor: selected ? 'primary.main' : 'white',
        '&:hover': {
          cursor: 'pointer',
          backgroundColor: 'primary.main',
          color: 'white',
        },
      }}
      {...props}
    >
      <Grid container direction="row" alignItems={'center'}>
        <Grid item marginRight={1}>
          <Typography fontSize={16} fontWeight={'bold'}>
            {answerLetter()} )
          </Typography>
        </Grid>

        <Grid item>
          <Typography fontWeight={selected ? 'bold' : 'normal'} fontSize={16}>
            {content}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Answer;
