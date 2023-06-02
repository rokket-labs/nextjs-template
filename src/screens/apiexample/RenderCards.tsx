import { useEffect } from 'react'
import { Flex, Heading, Text, useToast } from '@chakra-ui/react'
import Image from 'next/image'
import { useGetRickAndMortyCharacters } from 'services/graphql'
import { Character } from 'services/graphql/types'

import Loading from 'components/Loading'

export const RenderCards = () => {
  const toast = useToast()
  const { data, isLoading, error } = useGetRickAndMortyCharacters()

  useEffect(() => {
    error &&
      toast({
        title: 'There was an error.',
        description: error as string,
        position: 'top-right',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
  }, [error, toast])

  if (isLoading) return <Loading />
  else
    return (
      <Flex justifyContent="center" flexWrap="wrap" gridGap="20px" maxH="60vh">
        {data?.results.map((item: Character, index: number) => {
          return (
            <Flex
              key={`${index + 1}`}
              w="274px"
              h="513px"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              borderRadius="30px"
              padding="50px 37px"
              border="1px solid white"
              bg="linear-gradient(157.18deg, rgba(255, 255, 255, 0.58) -59.81%, rgba(255, 255, 255, 0) 102.89%);"
            >
              <Flex w="100%" flex="10">
                <Image
                  priority
                  alt={item.name + item.image}
                  height={200}
                  width={274}
                  style={{ objectFit: 'cover' }}
                  loader={() => {
                    return item.image
                  }}
                  unoptimized
                  src={item.image}
                />
              </Flex>
              <Flex flexDir="column" justifyContent="space-between" flex="14">
                <Flex flexDir="column">
                  <Heading
                    mt="1rem"
                    color="white"
                    fontSize="32px"
                    as="h6"
                    size="sm"
                  >
                    {item.name}
                  </Heading>
                  <Text mt="0.5rem" fontSize="22px" color="white">
                    {item.gender}
                  </Text>
                  <Text mt="0.5rem" fontSize="22px" color="white">
                    {item.species}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          )
        })}
      </Flex>
    )
}

export default RenderCards
