import { Box, Button, Link as ChakraLink, Spinner } from '@chakra-ui/react'
import { signIn, signOut, useSession } from 'next-auth/client'

import { useApollo } from '../lib/apolloClient'

import { Container } from './Container'

export const CTA: React.FC = () => {
  const apolloClient = useApollo()
  const [session, loading] = useSession()

  const renderAuthButton = () => {
    const buttonText = session ? 'Sign Out' : 'Sign In'

    const signOutAndClearData = async () => {
      await signOut()
      await apolloClient.clearStore()
    }

    return (
      <Box flexGrow={3} mx={2}>
        <Button
          width="100%"
          variant="solid"
          colorScheme="green"
          onClick={() => (session ? signOutAndClearData() : signIn())}>
          {loading ? <Spinner /> : buttonText}
        </Button>
      </Box>
    )
  }
  return (
    <Container
      flexDirection="row"
      position="fixed"
      bottom="0"
      width="100%"
      maxWidth="48rem"
      py={2}>
      <ChakraLink isExternal href="https://chakra-ui.com" flexGrow={1} mx={2}>
        <Button width="100%" variant="outline" colorScheme="green">
          chakra-ui
        </Button>
      </ChakraLink>

      {renderAuthButton()}
    </Container>
  )
}
