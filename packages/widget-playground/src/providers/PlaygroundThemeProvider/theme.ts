import { createTheme } from '@mui/material';

// https://mui.com/customization/palette/
declare module '@mui/material/styles' {
  interface TypographyVariants {
    '@supports (font-variation-settings: normal)': React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    '@supports (font-variation-settings: normal)'?: React.CSSProperties;
  }
  interface Shape {
    borderRadius: number;
    borderRadiusSecondary: number;
  }
  interface Theme {
    shape: Shape;
  }
  interface ThemeOptions {
    shape?: Partial<Shape>;
  }
}

const initValues = {
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#F5B5FF',
    },
  },
  typography: {
    fontFamily: ['monospace'].join(','),
  },
  shape: {
    borderRadius: 12,
    borderRadiusSecondary: 12,
  },
};

export const theme = createTheme(initValues);
