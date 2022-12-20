import { Avatar, Code, Flex, Text, VStack } from '@chakra-ui/react'
import { Session } from 'next-auth'

export const RenderFooter: React.FC<{ session: Session | null | undefined }> =
  ({ session }) => {
    if (!session || !session.user) return null

    const { image = '', name = '', email = '' } = session.user

    return (
      <Flex as="footer" py="6rem">
        <VStack>
          {image && <Avatar src={image} />}
          <Text color="white">
            Logged in as <Code>{name}</Code> - (<Code>{email}</Code>)
          </Text>
        </VStack>
      </Flex>
    )
  }

export default RenderFooter
