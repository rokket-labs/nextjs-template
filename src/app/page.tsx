'use client'
import { Flex } from '@chakra-ui/react'

// import { useSession } from 'next-auth/client'
import RenderCards from 'screens/home/RenderCards'
// import RenderFooter from 'screens/home/RenderFooter'

const Index = () => {
  // const [session] = useSession()

  return (
    <Flex w="100%" flexDir="column">
      <RenderCards />
      <br />
      {/* <RenderFooter session={session} /> */}
    </Flex>
  )
}

export default Index
