import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    COLORS: {
      PRODUCT: {
        BLUE: string
        PURPLE: string
        BLUE_DARK: string
        PURPLE_DARK: string
      }
      BASE: {
        GRAY_700: string
        GRAY_600: string
        GRAY_500: string
        GRAY_400: string
        GRAY_300: string
        GRAY_200: string
        GRAY_100: string
      }
      FEEDBACK: {
        DANGER: string
      }
    }
    FONT_FAMILY: {
      BOLD: string
      REGULAR: string
    }
  }
}
