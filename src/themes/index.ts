import { createTheme, Theme, ThemeOptions } from '@mui/material';

const createAppTheme = (themeOprions: ThemeOptions): Theme =>
  createTheme(themeOprions);

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    // xs: false; // removes the `xs` breakpoint
    // sm: false;
    // md: false;
    // lg: false;
    // xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const theme: Theme = createAppTheme({
  palette: {
    mode: 'dark',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 1024,
      lg: 1200,
      xl: 1536,
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

export default theme;
