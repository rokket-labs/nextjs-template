import { Flex, FlexProps, useColorMode } from '@chakra-ui/react'
import Head from 'next/head'

export const Container: React.FC<FlexProps> = ({ title, ...props }) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.900' }

  const color = { light: 'black', dark: 'white' }

  const baseTitle = 'Rokket Labs NextJS Template'
  const pageTitle = title ? `${baseTitle} - ${title}` : baseTitle

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        {...props}
      />
    </>
  )
}
