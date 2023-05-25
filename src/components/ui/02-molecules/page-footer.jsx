import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ButtonBase from '@mui/material/ButtonBase';
import SearchIcon from '../../../img/icons/image-search.svg';

export default function PageFooter() {
  const wrapperStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: 'sunset-orange.main',
  };

  const bottomButtonStyles = {
    flex: 1,
    display: 'flex',
    paddingRight: '47px',
    alignItems: 'center',
    justifyContent: 'flex-end',
  };

  const iconButtonStyles = {
    width: '80px',
    height: '80px',
    borderRadius: 0,
    backgroundColor: 'gentle-yellow.main',
  };

  return (
    <footer>
      <Box sx={wrapperStyles}>
        <ButtonBase sx={bottomButtonStyles}>
          <Typography variant="large-text" gutterBottom>
            Quilted by Four Kitchens
          </Typography>
        </ButtonBase>
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
