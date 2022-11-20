import { createTheme, responsiveFontSizes, TypeBackground  } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import type {} from '@mui/x-date-pickers/themeAugmentation';

let theme = createTheme({
  palette: {
    neutral: {
      main: '#EBEBEB',
      contrastText: '#000000',
    },
    backgroundcolor: {
      main: '#fff',
    },
    primary: {
      main: '#D0755A',
    },
    secondary: {
      main: '#249CF9',
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
    },
    h4: {
      fontWeight: 'bold',
      fontSize: '2.4rem',
    },
    caption: {
      fontWeight: 'bold',
      fontSize: '1.3rem',
      textTransform: 'none'
    },
    body1: {
      fontSize: '1.6rem',
    },
  }
});

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
    backgroundcolor: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
    backgroundcolor?: PaletteOptions['primary'];
  }
}

// Update the Button's color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
    background: true;
  }
}


theme = responsiveFontSizes(theme);
export default theme;