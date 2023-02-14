import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Quiz from '@/features/Quiz/Quiz';

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Container>
        <Quiz />
      </Container>
    </>
  );
}
