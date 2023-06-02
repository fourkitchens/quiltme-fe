import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ButtonBase from '@mui/material/ButtonBase';
import SearchBar from '../02-molecules/search-bar';

export default function PageFooter() {
  const wrapperStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    bgcolor: 'sunset-orange.main',
  };

  const bottomButtonStyles = {
    flex: 1,
    display: 'flex',
    paddingRight: '47px',
    alignItems: 'center',
    justifyContent: 'flex-end',
  };

  return (
    <footer>
      <Box sx={wrapperStyles}>
        <ButtonBase sx={bottomButtonStyles}>
          <Typography variant="large-text" gutterBottom>
            Quilted by Four Kitchens
          </Typography>
        </ButtonBase>
        <SearchBar />
      </Box>
    </footer>
  );
}
