import { ExtendTheme } from "@pigment-css/react/theme";

declare module "@pigment-css/react/theme" {
  interface ThemeTokens {
    colorSchemes: {
      light: {
        colors: {
          background: string;
          foreground: string;
        };
      };
      dark: {
        colors: {
          background: string;
          foreground: string;
        };
      };
    };
  }

  interface ThemeArgs {
    theme: ExtendTheme<{
      colorScheme: "light" | "dark";
      tokens: ThemeTokens;
    }>;
  }
}
