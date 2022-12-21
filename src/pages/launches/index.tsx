import { Flex } from '@chakra-ui/react'
import { NextPage } from 'next'

import RenderCards from 'screens/launches/RenderCards'

const Launches: NextPage = () => {
  return (
    <Flex w="100%" flexDir="column">
      <RenderCards />
    </Flex>
  )
}

export default Launches
