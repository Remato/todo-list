import { ActivityIndicator } from 'react-native'
import { ThemeProvider, DefaultTheme } from 'styled-components/native'
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import { Home } from './src/screens'

const theme: DefaultTheme = {
  COLORS: {
    PRODUCT: {
      BLUE: '#4EA8DE',
      PURPLE: '#8284FA',
      BLUE_DARK: '#1E6F9F',
      PURPLE_DARK: '#5E60CE',
    },
    BASE: {
      GRAY_700: '#0D0D0D',
      GRAY_600: '#1A1A1A',
      GRAY_500: '#262626',
      GRAY_400: '#333333',
      GRAY_300: '#808080',
      GRAY_200: '#D9D9D9',
      GRAY_100: '#F2F2F2',
    },
    FEEDBACK: {
      DANGER: '#E25858',
    },
  },
  FONT_FAMILY: {
    BOLD: 'Inter_700Bold',
    REGULAR: 'Inter_400Regular',
  },
}

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold })

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Home /> : <ActivityIndicator />}
    </ThemeProvider>
  )
}
