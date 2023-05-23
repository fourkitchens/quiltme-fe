import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    'electric-orange': {
      main: '#E32002',
      contrastText: '#FFFFFF',
    },
    'cool-magenta': {
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
    fontFamily: 'Albert Sans, sans-serif',
  },
});

theme.typography = {
  h1: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '38px',
      fontWeight: 800,
      lineHeight: '116%',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '64px',
    },
  },
  h2: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '25px',
      fontWeight: 800,
      lineHeight: '116%',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '40px',
    },
  },
  'large-text': {
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: '116%',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '24px',
    },
  },
  'default-text': {
    [theme.breakpoints.up('sm')]: {
      fontSize: '16px',
      fontWeight: 500,
      lineHeight: '125%',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '20px',
    },
  },
  'small-text': {
    [theme.breakpoints.up('sm')]: {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '125%',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '16px',
    },
  },
  button: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
      fontWeight: 800,
      textTransform: 'none',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '24px',
    },
  }
};

export default theme;
