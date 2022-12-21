import React from 'react'
import { Box, Spinner } from '@chakra-ui/react'

const Loading: React.FC = () => {
  return (
    <Box w="full" h="full" textAlign="center">
      <Spinner color="white" size="xl" />
    </Box>
  )
}

export default Loading
