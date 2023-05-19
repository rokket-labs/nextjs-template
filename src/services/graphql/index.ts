import { useQuery, UseQueryOptions } from 'react-query'

import { graphqlClient } from 'lib/queryClient'

import { queryRickAndMortyCharacters } from './Queries'
import { CharactersData } from './types'

export const useGetRickAndMortyCharacters = (
  opts?: Omit<
    UseQueryOptions<CharactersData, unknown, CharactersData>,
    'queryKey' | 'queryFn'
  >,
) => {
  return useQuery<CharactersData>(
    [],
    async () => {
      const client = await graphqlClient()

      const data: CharactersData = (
        await client.request(queryRickAndMortyCharacters, {})
      ).characters

      return data
    },
    opts,
  )
}
