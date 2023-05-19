'use client'
import { Flex } from '@chakra-ui/react'

import RenderCards from 'screens/apiexample/RenderCards'

const ApiExample = () => {
  return (
    <Flex w="100%" flexDir="column">
      <RenderCards />
    </Flex>
  )
}

export default ApiExample
