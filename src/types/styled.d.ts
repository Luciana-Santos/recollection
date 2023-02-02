import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      montserrat: string;
      mavenPro: string;
    };
    colors: {
      white: string;
      black: string;
      accent: string;
      lavender: string;
      midnightBlue: string;
      dkMidnight: string;
    };
    breakpoints: {
      minWidth: {
        md: string;
        lg: string;
        xlg: string;
      };
      maxWidth: {
        sm: string;
        md: string;
        lg: string;
      };
    };
  }
}
