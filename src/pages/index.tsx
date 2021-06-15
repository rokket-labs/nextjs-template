import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Code,
  Link as ChakraLink,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import { Session } from 'next-auth'
import { useSession } from 'next-auth/client'

import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Main } from '../components/Main'

const renderFooter = (session: Session | null | undefined) => {
  if (!session || !session.user) return <Text>Not logged in</Text>

  const { image = '', name = '', email = '' } = session.user

  return (
    <VStack>
      {image && <Avatar src={image} />}
      <Text>
        Logged in as <Code>{name}</Code> - (<Code>{email}</Code>)
      </Text>
    </VStack>
  )
}

const renderLinks = () => (
  <List spacing={3} my={0}>
    <ListItem>
      <ListIcon as={CheckCircleIcon} color="green.500" />
      <ChakraLink isExternal href="https://chakra-ui.com" flexGrow={1} mr={2}>
        Chakra UI <LinkIcon />
      </ChakraLink>
    </ListItem>
    <ListItem>
      <ListIcon as={CheckCircleIcon} color="green.500" />
      <ChakraLink isExternal href="https://nextjs.org" flexGrow={1} mr={2}>
        Next.js <LinkIcon />
      </ChakraLink>
    </ListItem>
    <ListItem>
      <ListIcon as={CheckCircleIcon} color="green.500" />
      <ChakraLink
        isExternal
        href="https://www.apollographql.com/"
        flexGrow={1}
        mr={2}>
        Apollo GraphQL <LinkIcon />
      </ChakraLink>
    </ListItem>
    <ListItem>
      <ListIcon as={CheckCircleIcon} color="green.500" />
      <ChakraLink
        isExternal
        href="https://next-auth.js.org/"
        flexGrow={1}
        mr={2}>
        NextAuth <LinkIcon />
      </ChakraLink>
    </ListItem>
  </List>
)

const Index: NextPage = () => {
  const [session] = useSession()

  return (
    <>
      <Hero />
      <Main>
        <Text>
          Example repository of <Code>Next.js</Code> + <Code>chakra-ui</Code> +{' '}
          <Code>typescript</Code>.
        </Text>
        {renderLinks()}
      </Main>
      <Footer>{renderFooter(session)}</Footer>
    </>
  )
}

export default Index
