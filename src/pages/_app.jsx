import { ThemeProvider } from '@mui/material/styles';
import { css, Global } from '@emotion/react';
import PropTypes from 'prop-types';
import theme from '../theme';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../lib/apolloClient';

// Google Fonts.
const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
`;

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};
