import { useQuery, UseQueryOptions } from 'react-query'

import { graphqlClient } from 'lib/queryClient'

import { queryLaunches } from './Queries'
import { LaunchData } from './types'

export const useGetLaunches = (
  opts?: Omit<
    UseQueryOptions<LaunchData[], unknown, LaunchData[]>,
    'queryKey' | 'queryFn'
  >,
) => {
  return useQuery<LaunchData[]>(
    [],
    async () => {
      const client = await graphqlClient()

      const data: LaunchData[] = (await client.request(queryLaunches, {}))
        .launchesPast

      return data
    },
    opts,
  )
}
