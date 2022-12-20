import { LinkIcon } from '@chakra-ui/icons'
import { Button, Flex, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'

import {
  ApolloLogo,
  ChakraUILogo,
  NextJsLogo,
  ReactQueryLogo,
} from 'assets/svg'

import { STACK } from './constant'

type StackItem = {
  label: string
  url: string
  logo: number
}

export const RenderCards = () => {
  const renderLogo = (logo: number) => {
    switch (logo) {
      case 0:
        return <ChakraUILogo />
      case 1:
        return <NextJsLogo />
      case 2:
        return <ApolloLogo />
      case 3:
        return (
          <Image
            src={'/NextAuth.png'}
            alt="Picture of the author"
            width={80}
            height={80}
          />
        )
      default:
        return <ReactQueryLogo />
    }
  }

  return (
    <Flex justifyContent="center" flexWrap="wrap" gridGap="20px">
      {STACK.map((item: StackItem, index: number) => {
        return (
          <Flex
            key={`${index + 1}`}
            w="247px"
            h="345px"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            borderRadius="30px"
            border="1px solid white"
            backdropFilter="blur(1.5px)"
            bg="linear-gradient(157.18deg, rgba(255, 255, 255, 0.58) -59.81%, rgba(255, 255, 255, 0) 102.89%);"
            padding="61px 38px"
          >
            <Flex flex="6" w="100%" justifyContent="center" p="10px">
              {renderLogo(item.logo)}
            </Flex>
            <Flex flex="10" w="100%" justifyContent="center" p="10px">
              <Heading m="0" color="white" textAlign="center">
                {item.label}
              </Heading>
            </Flex>
            <Flex flex="8" w="100%" justifyContent="center" p="10px">
              <Link href={item.url} passHref>
                <a target="_blank">
                  <Button
                    minW="100%"
                    variant="custom-button"
                    leftIcon={<LinkIcon />}
                  >
                    Go !
                  </Button>
                </a>
              </Link>
            </Flex>
          </Flex>
        )
      })}
    </Flex>
  )
}

export default RenderCards
