import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      background: string;
      backgroundCard: string;
      buttonSubmit: string;
    };
  }
}
