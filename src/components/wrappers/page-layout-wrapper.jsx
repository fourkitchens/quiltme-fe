import PropTypes from 'prop-types';
import { Box, Container } from '@mui/material';
import Sidebar from '../ui/02-molecules/sidebar';
import PageHeader from '../ui/03-organisms/page-header';
import PageFooter from '../ui/03-organisms/page-footer';

export default function PageLayoutWrapper({ children }) {
  const containerStyles = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    overflow: 'hidden',
    flexFlow: 'column nowrap',
  };

  const bodyStyles = {
    flex: 1,
    overflow: 'auto',
    bgcolor: "magic-blue.main"
  };
  
  return (
    <Container sx={containerStyles} maxWidth={false} disableGutters>
      <PageHeader />
      <Box sx={bodyStyles}>
        {children}
        <Sidebar />
      </Box>
      <PageFooter />
    </Container>
  );
}

PageLayoutWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
