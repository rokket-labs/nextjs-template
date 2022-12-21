import { Flex, Text, useBreakpointValue } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'

import { DrimoLogo } from 'assets/svg'

export const NavigationLogo = () => {
  const router = useRouter()
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false })

  return (
    <Flex alignItems="center" cursor="pointer" onClick={() => router.push(`/`)}>
      <DrimoLogo width={isMobile ? 100 : 207} height={isMobile ? 40 : 51} />
      <Flex
        ml={['1rem', '1rem', '2rem']}
        bg="drimo500"
        justifyContent="center"
        alignItems="center"
        width={['100px', '120px', '240px']}
        h={['30px', '40px', '50px']}
        borderRadius="full"
      >
        <Text
          fontSize={['15px', '20px', '42px']}
          color="white"
          fontWeight="700"
        >
          Template
        </Text>
      </Flex>
    </Flex>
  )
}

export default NavigationLogo
