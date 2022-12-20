import { Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'

import { DrimoLogo } from 'assets/svg'

export const NavigationLogo = () => {
  const router = useRouter()

  return (
    <Flex alignItems="center" cursor="pointer" onClick={() => router.push(`/`)}>
      <DrimoLogo />
      <Flex
        ml="2rem"
        bg="drimo500"
        justifyContent="center"
        alignItems="center"
        width="240px"
        h="50px"
        borderRadius="full"
      >
        <Text fontSize="42px" color="white" fontWeight="700">
          Template
        </Text>
      </Flex>
    </Flex>
  )
}

export default NavigationLogo
