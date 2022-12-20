import { Flex } from '@chakra-ui/react'
import { AnimateSharedLayout } from 'framer-motion'

import { NavigationButtons } from './NavigationButtons'
import { NavigationLogo } from './NavigationLogo'

export const Layout: React.FC = ({ children }) => {
  return (
    <AnimateSharedLayout>
      <Flex
        flexDir="column"
        height="100vh"
        width="100%"
        backgroundImage={`url('background.png')`}
      >
        <Flex flex="2" p="0 4rem" justifyContent="space-between">
          <NavigationLogo />
          <NavigationButtons />
        </Flex>
        <Flex flex="22">
          <Flex p="4rem" minW="100vw" minH="100%" overflow="auto">
            {children}
          </Flex>
        </Flex>
      </Flex>
    </AnimateSharedLayout>
  )
}
