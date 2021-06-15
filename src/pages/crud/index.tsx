import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Spacer,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { NextPage } from 'next'

import { DataTable } from 'components/DataTable'
import { Modal } from 'components/Modal'

type FormData = {
  firstName: string
  lastName: string
}

const Form: React.FC = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<FormData>()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = (values: Record<string, any>): Promise<void> => {
    return new Promise(resolve => {
      setIsLoading(true)
      setTimeout(() => {
        console.log(values)
        setIsLoading(false)
        resolve()
      }, 1000)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing="4">
        <FormControl isRequired isInvalid={!!errors.firstName}>
          <FormLabel htmlFor="name">First Name</FormLabel>
          <Input {...register('firstName')} />
          <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.lastName}>
          <FormLabel htmlFor="name">Last Name</FormLabel>
          <Input {...register('lastName')} />
          <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
        </FormControl>
        <Button
          isLoading={isLoading}
          w="100%"
          colorScheme="green"
          type="submit">
          SUBMIT
        </Button>
      </VStack>
    </form>
  )
}

const Crud: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box py="4rem" px="4rem" minW="90vw">
        <Flex>
          <Heading as="h2" mb="0.75rem">
            CRUD Example
          </Heading>
          <Spacer />
          <Button colorScheme="green" onClick={onOpen}>
            Show Form Modal
          </Button>
        </Flex>
        <DataTable />
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          title="Form Modal"
          content={<Form />}
        />
      </Box>
    </>
  )
}

export default Crud
