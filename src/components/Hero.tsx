import { Flex, Heading } from '@chakra-ui/react'

type Props = {
  title?: string
}

export const Hero: React.FC<Props> = ({ title = 'Rokket Labs Template' }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Heading fontSize="6vw">{title}</Heading>
  </Flex>
)
