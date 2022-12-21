/* eslint-disable @next/next/no-title-in-document-head */
import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <title>Drimo template</title>
          <link rel="shortcut icon" href="/favicon.png" />
        </Head>
        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
