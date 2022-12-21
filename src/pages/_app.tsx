import { QueryClientProvider } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'
import { Layout } from 'layout'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'
import theme from 'theme/theme'

import { queryClient } from 'lib/queryClient'

import '../global.css'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider resetCSS theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </QueryClientProvider>
    </Provider>
  )
}

export default MyApp
