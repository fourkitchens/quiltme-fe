import { createTheme } from '@mui/material/styles';

const fontAlbertSans = [
  'Albert Sans',
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(',')

const theme = createTheme({
  palette: {
    'electric-orange': {
      main: '#E32002',
      contrastText: '#FFFFFF',
    },
    'cool-magenta': {
      light: 'rgb(234, 11, 63, 0.7)',
      main: '#EA0B3F',
      contrastText: '#FFFFFF',
    },
    'soft-pink': {
      light: '#FFE0E7',
      main: '#FA91AA',
      contrastText: '#1C1C1C',
    },
    'sunset-orange': {
      light: 'rgba(253, 97, 73, 0.7)',
      main: '#FD6149',
      contrastText: '#1C1C1C',
    },
    'magic-blue': {
      light: 'rgba(0, 122, 184, 0.7)',
      main: '#007AB8',
      contrastText: '#1C1C1C',
    },
    'gentle-yellow': {
      main: '#F8B722',
      contrastText: '#1C1C1C',
    },
    'pacific-white': {
      main: '#FFFFFF',
      contrastText: '#1C1C1C',
    },
    'nice-black': {
      main: '#1C1C1C',
      contrastText: '#FFFFFF',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 905,
      lg: 1440,
    },
  },
  typography: {
    fontFamily: fontAlbertSans,
    h1: {
      fontSize: 'clamp(2.375rem, 1.8333333333333333rem + 2.7083333333333335vw, 4rem)',
      fontWeight: 800,
      lineHeight: '116%',
    },
    h2: {
      fontSize: 'clamp(1.5625rem, 1.25rem + 1.5625vw, 2.5rem)',
      fontWeight: 800,
      lineHeight: '116%',
    },
    h3: {
      fontSize: 'clamp(1.125rem, 0.8333rem + 1.4583vw, 2rem)',
      fontWeight: 800,
      lineHeight: '116%',
    },
    'large-text': {
      fontFamily: fontAlbertSans,
      fontSize: 'clamp(1.125rem, 1rem + 0.625vw, 1.5rem)',
      fontWeight: 500,
      lineHeight: '116%',
    },
    'default-text': {
      fontFamily: fontAlbertSans,
      fontSize: 'clamp(1rem, 0.9166666666666666rem + 0.4166666666666667vw, 1.25rem)',
      fontWeight: 500,
      lineHeight: '125%',
    },
    'small-text': {
      fontFamily: fontAlbertSans,
      fontSize: 'clamp(0.75rem, 0.6666666666666666rem + 0.4166666666666667vw, 1rem)',
      fontWeight: 500,
      lineHeight: '125%',
    },
    button: {
      fontFamily: fontAlbertSans,
      fontSize: 'clamp(1.25rem, 1.1666666666666667rem + 0.4166666666666667vw, 1.5rem)',
      fontWeight: 800,
      textTransform: 'none',
    }
  },
  transitions: {
    duration: {
      enteringScreen: 550,
      leavingScreen: 550,
    }
  },
});

export default theme;
