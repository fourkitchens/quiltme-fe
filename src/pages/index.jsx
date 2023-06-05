import { Container } from '@mui/material';
import ImagesGridWrapper from '../components/wrappers/images-grid-wrapper';

export default function Home() {
  const containerStyles = {
    height: '100%',
  };

  return (
    <Container sx={containerStyles} maxWidth={false} disableGutters>
      <ImagesGridWrapper />
    </Container>
  )
}
