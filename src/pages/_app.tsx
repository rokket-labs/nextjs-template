import { QueryClientProvider } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'

import { Layout } from 'components/Layout'
import { queryClient } from 'lib/queryClient'

import theme from '../theme'

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
