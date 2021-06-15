import React from 'react'
import {
  Modal as ChakraModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  title?: string
  content?: React.ReactNode
  actionButton?: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({
  onClose,
  isOpen,
  title,
  content,
  actionButton,
}) => {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{content}</ModalBody>

        <ModalFooter>{actionButton}</ModalFooter>
      </ModalContent>
    </ChakraModal>
  )
}
