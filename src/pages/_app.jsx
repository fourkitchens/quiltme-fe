import theme from '../theme';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import PageLayoutWrapper from '../components/wrappers/page-layout-wrapper';

// Global styles.
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
        <PageLayoutWrapper locale={pageProps.locale}>
          <Component {...pageProps} />
        </PageLayoutWrapper>
    </ThemeProvider>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};
