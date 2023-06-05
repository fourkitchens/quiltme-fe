import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SearchBar from '../02-molecules/search-bar';
import BottomBanner from '../02-molecules/bottom-banner';
import BackgroundPattern from '../01-atoms/background-pattern';

export default function PageFooter() {
  const wrapperStyles = {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  };

  const patternWrapperStyles = {
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    position: 'fixed',
    height: { xs: '5rem', md: '7rem' },
  };

  return (
    <footer>
      <Stack sx={patternWrapperStyles}>
        <BackgroundPattern />
      </Stack>
      <Box sx={wrapperStyles}>
        <BottomBanner />
        <SearchBar />
      </Box>
    </footer>
  );
}
