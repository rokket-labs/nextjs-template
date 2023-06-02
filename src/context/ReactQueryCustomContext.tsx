/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from 'react'
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query'
import { useToast } from '@chakra-ui/react'

import { queryClient } from 'lib/queryClient'

export const ReactQueryCustomContextProvider = ({
  children,
}: {
  children: any
}) => {
  const toast = useToast()
  const [client] = useState(
    new QueryClient({
      ...queryClient,
      queryCache: new QueryCache({
        onError: (error, query) => {
          if (query.state.data !== undefined)
            toast({
              title: `${(error as any).message} toast`,
              status: 'error',
            })
        },
      }),
    }),
  )

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
