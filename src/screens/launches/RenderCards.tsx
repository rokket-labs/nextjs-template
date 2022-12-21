import { useEffect } from 'react'
import { LinkIcon } from '@chakra-ui/icons'
import { Button, Flex, Heading, Text, useToast } from '@chakra-ui/react'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import { useGetLaunches } from 'services/graphql'
import { LaunchData } from 'services/graphql/types'

import Loading from 'components/Loading'

export const RenderCards = () => {
  const toast = useToast()
  const { data, isLoading, error } = useGetLaunches()

  const randomElem = <T,>(arr: T[]): T | null => {
    // eslint-disable-next-line security-node/detect-insecure-randomness
    return arr.length > 0 ? arr[Math.floor(Math.random() * arr.length)] : null
  }

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
        {data?.map((item: LaunchData, index: number) => {
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
                  height={200}
                  width={274}
                  objectFit="cover"
                  src={
                    randomElem<{
                      name: string
                      image: string
                      home_port: string
                    }>(item.ships)?.image ||
                    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FRocket&psig=AOvVaw1RYDAh-BxCkYXDRmVwYK5Q&ust=1614093755794000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCC3fzl_e4CFQAAAAAdAAAAABAD'
                  }
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
                    {item.mission_name}
                  </Heading>
                  <Text mt="0.5rem" fontSize="22px" color="white">
                    {dayjs(item.launch_date_local).format('YYYY-MM-DD')}
                  </Text>
                </Flex>
                {item.links.article_link && (
                  <Link href={item.links.article_link} passHref>
                    <a target="_blank">
                      <Button variant="custom-button" leftIcon={<LinkIcon />}>
                        Go to launch article
                      </Button>
                    </a>
                  </Link>
                )}
              </Flex>
            </Flex>
          )
        })}
      </Flex>
    )
}

export default RenderCards
