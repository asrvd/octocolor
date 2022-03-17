import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '600px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
})
