import { ThemeProvider } from '@mui/material/styles';
import { css, Global } from '@emotion/react';
import PropTypes from 'prop-types';
import theme from '../theme';
import PageLayoutWrapper from '../components/wrappers/page-layout-wrapper';

// Google Fonts.
const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap');
`;

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
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
