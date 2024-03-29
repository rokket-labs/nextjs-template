import { GraphQLClient } from 'graphql-request'

const graphqlUrl =
  process.env.NEXT_PUBLIC_API_URL ?? 'https://rickandmortyapi.com/graphql'

export const graphqlClient = async () => {
  // Uncomment if you need to get a token
  // const token = await getBearerToken()
  const client = new GraphQLClient(graphqlUrl, {
    // Uncomment to pass token into headers
    // headers: {
    //   Authorization: token,
    // },
  })

  return client
}

export const queryClient = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
}
