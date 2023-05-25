import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '../../../img/icons/image-search.svg'

export default function PageFooter({ logo }) {
  return (
    <footer>
      <Box
        sx={{
          display: 'flex',
          backgroundColor: '#F8B722', // TODO: Replace with theme colors.
          justifyContent: 'space-between'
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h4">
            Meet 4K
          </Typography>
        </Box>
        <IconButton
          sx={{
            width: 107,
            height: 79,
            borderRadius: 0,
            backgroundColor: '#007AB8', // TODO: Replace with theme colors.
          }}
        >
          <SearchIcon />
        </IconButton>
      </Box>
    </footer>
  );
}

PageFooter.propTypes = {
  logo: PropTypes.object,
};
