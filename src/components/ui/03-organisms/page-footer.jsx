import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SearchBar from '../02-molecules/search-bar';
import BottomBanner from '../02-molecules/bottom-banner';
import BackgroundPattern from '../01-atoms/background-pattern';

export default function PageFooter() {
  const wrapperStyles = {
    display: 'flex',
    justifyContent: 'space-between',
  };

  const patternWrapperStyles = {
    width: '100%',
    height: '115px',
    position: 'fixed',
    bottom: 0,
    right: 0,
    left: 0,
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
