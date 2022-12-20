import { extendTheme } from '@chakra-ui/react'

import { buttonStyles } from './components/button'
import { breakpoints } from './foundations/breakpoints'
import { colors } from './foundations/colors'

const fonts = { mono: `'Menlo', monospace` }

const theme = extendTheme({
  components: {
    ...buttonStyles,
  },
  colors,
  fonts,
  breakpoints,
})

export default theme
