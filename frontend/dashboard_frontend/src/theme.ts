import { createTheme, responsiveFontSizes  } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import type {} from '@mui/x-date-pickers/themeAugmentation';

// A custom theme for this app
let theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    h1: {
      fontWeight: 'bold',
      fontSize: '3rem',
      textAlign: 'center'
    }
  }
});

theme = responsiveFontSizes(theme);
console.log(theme);

export default theme;