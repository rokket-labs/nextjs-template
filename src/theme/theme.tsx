import { extendTheme } from '@chakra-ui/react'

import '@fontsource/inter'

import { buttonStyles } from './components/button'
import { breakpoints } from './foundations/breakpoints'
import { colors } from './foundations/colors'

const fonts = { heading: 'Inter', body: 'Inter' }

const theme = extendTheme({
  components: {
    ...buttonStyles,
  },
  colors,
  fonts,
  breakpoints,
})

export default theme
