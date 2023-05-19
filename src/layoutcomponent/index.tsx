'use client'
import { Box, Flex } from '@chakra-ui/react'
import { AnimateSharedLayout } from 'framer-motion'

import { NavigationButtons } from './NavigationButtons'
import { NavigationLogo } from './NavigationLogo'

export const LayoutComponent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <AnimateSharedLayout>
      <Flex position="relative" w="100%" h="100%">
        <Box
          position="absolute"
          bg="red"
          zIndex="1"
          height="100vh"
          width="100%"
          backgroundImage={`url('background.png')`}
        />
        <Flex
          position="absolute"
          zIndex="2"
          flexDir="column"
          height="100vh"
          width="100%"
          bg="rgb(0,0,0,0.4)"
        >
          <Flex
            flex="2"
            p={['0 2rem', '0 4rem']}
            justifyContent="space-between"
          >
            <NavigationLogo />
            <NavigationButtons />
          </Flex>
          <Flex flex="22">
            <Flex p="4rem" minW="100vw" minH="100%" overflow="auto">
              {children}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </AnimateSharedLayout>
  )
}
