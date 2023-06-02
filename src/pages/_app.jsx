import PropTypes from 'prop-types';
import { css, Global } from '@emotion/react';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import { ThemeProvider } from '@mui/material/styles';

import PageLayoutWrapper from '../components/wrappers/page-layout-wrapper';
import theme from '../theme';

// Google Fonts.
const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Albert+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap');
`;

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <PageLayoutWrapper locale={pageProps.locale}>
          <Component {...pageProps} />
        </PageLayoutWrapper>
      </ThemeProvider>
    </ApolloProvider>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};
