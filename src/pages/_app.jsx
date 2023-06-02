import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';
import { ThemeProvider } from '@mui/material/styles';

import PageLayoutWrapper from '../components/wrappers/page-layout-wrapper';
import theme from '../theme';

// Global styles.
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
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
