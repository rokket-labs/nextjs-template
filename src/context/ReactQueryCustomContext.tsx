'use client'

import { useState } from 'react'
import { QueryClientProvider } from 'react-query'

import { queryClient } from 'lib/queryClient'

export const ReactQueryCustomContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [client] = useState(queryClient)

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
