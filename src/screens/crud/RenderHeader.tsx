import { Button, Flex, Heading, Spacer } from '@chakra-ui/react'

export const RenderHeader: React.FC<{ onOpen: () => void }> = ({ onOpen }) => {
  return (
    <Flex justifyContent="space-between">
      <Heading color="white" as="h2" mb="0.75rem">
        CRUD
      </Heading>
      <Spacer />
      <Button variant="custom-button" onClick={onOpen}>
        Show Form Modal
      </Button>
    </Flex>
  )
}

export default RenderHeader
