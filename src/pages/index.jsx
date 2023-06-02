import { Container } from '@mui/material';
import ImagesGrid from '../components/ui/03-organisms/images-grid';

export default function Home() {
  const containerStyles = {
    height: '100%',
  };

  return (
    <Container sx={containerStyles} maxWidth={false} disableGutters>
      <ImagesGrid />
    </Container>
  )
}
