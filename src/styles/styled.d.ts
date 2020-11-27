import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      chart: {
        text: string;
      };

      status: {
        success: string;
        warning: string;
        danger: string;
        info: string;
        pending: string;
      };

      background: {
        table: {
          title: string;
          tdOdd: string;
          tdEven: string;
        };
      };
      text: {
        table: {
          title: string;
        };
      };
    };
  }
}
