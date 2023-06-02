import { Box, Stack, IconButton } from '@mui/material';
import SearchIcon from '../../../img/icons/image-search.svg';
import BottomBanner from './bottom-banner';
import BackgroundPattern from '../01-atoms/background-pattern';

export default function PageFooter() {
  const wrapperStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'sunset-orange.main',
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
  };

  const iconButtonStyles = {
    width: '80px',
    height: '80px',
    borderRadius: 0,
    backgroundColor: 'gentle-yellow.main',
  };

  const patternWrapperStyles = {
    width: '100%',
    height: '115px',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
  };

  return (
    <footer>
      <Stack sx={patternWrapperStyles}>
        <BackgroundPattern />
      </Stack>
      <Box sx={wrapperStyles}>
        <BottomBanner />
        <IconButton
          size="large"
          aria-label="search"
          sx={iconButtonStyles}
        >
          <SearchIcon />
        </IconButton>
      </Box>
    </footer>
  );
}
