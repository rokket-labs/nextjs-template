'use client'
import { Flex, useDisclosure } from '@chakra-ui/react'

import { RenderDataTable } from 'screens/crud/RenderDataTable'
import RenderHeader from 'screens/crud/RenderHeader'
import RenderModal from 'screens/crud/RenderModal'

const Crud = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex w="100%" flexDir="column">
      <RenderHeader onOpen={onOpen} />
      <RenderDataTable />
      <RenderModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  )
}

export default Crud
