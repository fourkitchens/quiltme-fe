import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Logo from './logo';

export default function PageHeader({ logo }) {
  return (
    <header>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{ flex: 1 }}></Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignContent: 'flex-start',
          }}
        >
          <Button variant="contained" h="100">Get quilted</Button>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Logo />
        </Box>
      </Box>
    </header>
  );
}

PageHeader.propTypes = {
  logo: PropTypes.object,
};
