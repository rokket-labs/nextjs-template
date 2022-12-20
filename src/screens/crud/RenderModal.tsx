/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react'

import { Modal } from 'components/Modal'

type FormData = {
  firstName: string
  lastName: string
}

export const RenderModal: React.FC<{ isOpen: boolean; onClose: () => void }> =
  ({ isOpen, onClose }) => {
    const Form: React.FC = () => {
      const {
        formState: { errors },
        register,
        handleSubmit,
      } = useForm<FormData>()
      const [isLoading, setIsLoading] = useState(false)

      const onSubmit = (values: {
        firstName: string
        lastName: string
      }): Promise<void> => {
        return new Promise((resolve: any) => {
          setIsLoading(true)
          setTimeout(() => {
            alert(`funciona ! yey! ${values.firstName} ${values.lastName}`)
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
              variant="custom-button"
              type="submit"
            >
              Submit
            </Button>
          </VStack>
        </form>
      )
    }

    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Form Modal"
        content={<Form />}
      />
    )
  }

export default RenderModal
