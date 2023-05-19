'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import theme from 'theme/theme'

export const ChakraCustomContextProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <CacheProvider>
      <ChakraProvider resetCSS theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}
