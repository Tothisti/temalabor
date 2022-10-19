import { createTheme, responsiveFontSizes  } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import type {} from '@mui/x-date-pickers/themeAugmentation';

// A custom theme for this app
let theme = createTheme({
  palette: {
    neutral: {
      main: '#EBEBEB',
      contrastText: '#000000',
    },
    primary: {
      main: '#CE7559',
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

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}


theme = responsiveFontSizes(theme);
export default theme;