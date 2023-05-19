// import { useQueryClient } from 'react-query'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  // Spinner,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

// import { signIn, signOut, useSession } from 'next-auth/client'
import { GithubLogo } from 'assets/svg'

export const NavigationButtons: React.FC = () => {
  // const queryClient = useQueryClient()
  // const [session, loading] = useSession()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()
  const isMobile = useBreakpointValue({ base: true, sm: true, md: false })

  const renderAuthButton = () => {
    // const buttonText = session ? 'Sign Out' : 'Sign In'

    // const signOutAndClearData = async () => {
    //   // await signOut()
    //   queryClient.clear()
    // }

    return (
      <Box flexGrow={3} mx={2}>
        <Button
          width="100%"
          variant="custom-button"
          leftIcon={<GithubLogo />}
          colorScheme="green"
          // onClick={() => (session ? signOutAndClearData() : signIn())}
        >
          {/* {loading ? <Spinner /> : buttonText} */}
        </Button>
      </Box>
    )
  }

  const renderContent = () => {
    const handleRoute = (route: string) => {
      if (isMobile) onClose()

      router.push(`/${route}`)
    }

    return (
      <>
        {renderAuthButton()}
        <Button
          width="100%"
          onClick={() => handleRoute(``)}
          variant="custom-ghost"
          mt={['0.5rem', '0.5rem', '0']}
          color="white"
        >
          Home
        </Button>
        <Button
          width="100%"
          onClick={() => handleRoute(`api`)}
          variant="custom-ghost"
          mt={['0.5rem', '0.5rem', '0']}
          color="white"
        >
          Api
        </Button>

        <Button
          onClick={() => handleRoute(`crud`)}
          width="100%"
          variant="custom-ghost"
          mt={['0.5rem', '0.5rem', '0']}
          color="white"
        >
          Crud
        </Button>
      </>
    )
  }

  return (
    <Flex alignItems="center" h="100%" py={2}>
      <Flex display={['flex', 'flex', 'none']}>
        <IconButton
          colorScheme="dark"
          aria-label="hamburguer"
          onClick={onOpen}
          icon={<HamburgerIcon w={10} h={10} color="white" />}
        />
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent bg="black">
              <DrawerCloseButton color="white" />
              <br />
              <br />
              <DrawerBody p="20px">{renderContent()}</DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
      <Flex display={['none', 'none', 'flex']}>{renderContent()}</Flex>
    </Flex>
  )
}
