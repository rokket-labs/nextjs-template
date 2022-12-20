import { useQueryClient } from 'react-query'
import { Box, Button, Flex, Spinner } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import { signIn, signOut, useSession } from 'next-auth/client'

import { GithubLogo } from 'assets/svg'

export const NavigationButtons: React.FC = () => {
  const queryClient = useQueryClient()
  const [session, loading] = useSession()
  const router = useRouter()

  const renderAuthButton = () => {
    const buttonText = session ? 'Sign Out' : 'Sign In'

    const signOutAndClearData = async () => {
      await signOut()
      queryClient.clear()
    }

    return (
      <Box flexGrow={3} mx={2}>
        <Button
          width="100%"
          variant="custom-button"
          leftIcon={<GithubLogo />}
          colorScheme="green"
          onClick={() => (session ? signOutAndClearData() : signIn())}
        >
          {loading ? <Spinner /> : buttonText}
        </Button>
      </Box>
    )
  }

  return (
    <Flex alignItems="center" h="100%" py={2}>
      {renderAuthButton()}
      <Button
        width="100%"
        onClick={() => router.push(`/`)}
        variant="custom-ghost"
        color="white"
      >
        Home
      </Button>
      <Button
        width="100%"
        onClick={() => router.push(`/launches`)}
        variant="custom-ghost"
        color="white"
      >
        Launches
      </Button>

      <Button
        onClick={() => router.push(`/crud`)}
        width="100%"
        variant="custom-ghost"
        color="white"
      >
        Crud
      </Button>
    </Flex>
  )
}
