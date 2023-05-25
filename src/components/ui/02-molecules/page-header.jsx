import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Logo from './logo';

export default function PageHeader({ logo }) {
  return (
    <header>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <Logo />
      </Box>
    </header>
  );
}

PageHeader.propTypes = {
  logo: PropTypes.object,
};
