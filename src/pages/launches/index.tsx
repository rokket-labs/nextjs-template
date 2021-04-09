import { useCallback, useEffect } from 'react'
import { useQuery } from 'react-query'
import { Box, Heading, useToast, Wrap } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useSession } from 'next-auth/client'

import { Launch } from 'components/Launch'
import Loading from 'components/Loading'
import { graphqlClient } from 'lib/queryClient'

import LAUNCHES_PAST from './LaunchesPast.gql'

export type LaunchData = {
  mission_name: string
  launch_date_local: Date
  launch_site: {
    site_name_long: string
  }
  links: {
    article_link: string
    video_link: string
  }
  rocket: {
    rocket_name: string
  }
  ships: {
    name: string
    home_port: string
    image: string
  }[]
}

type QueryData = {
  launchesPast: LaunchData[]
}

const useRocketLaunches = () => {
  const [session] = useSession()

  return useQuery('launches', async () =>
    graphqlClient()
      .setHeader('Authorization', `Bearer ${session?.accessToken}`)
      .request<QueryData>(LAUNCHES_PAST),
  )
}

const Launches: NextPage = () => {
  const toast = useToast()
  const { data, isLoading, error } = useRocketLaunches()

  useEffect(() => {
    error &&
      toast({
        title: 'There was an error.',
        description: error as string,
        position: 'top-right',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
  }, [error, toast])

  const renderRocketLaunch = useCallback(
    () =>
      data?.launchesPast.map(launch => (
        <Launch key={launch.mission_name} data={launch} />
      )),
    [data],
  )

  return (
    <Box py="4rem" px="4rem" minW="90vw">
      <Heading as="h2" mb="0.75rem">
        Rocket Launches
      </Heading>
      {isLoading ? <Loading /> : <Wrap>{renderRocketLaunch()}</Wrap>}
    </Box>
  )
}

// This code below explains how to set up SSR with Apollo Client.
// The code above is enabled for client side rendering (SPA)
// export const getServerSideProps: GetServerSideProps = async () => {
//   const apolloClient = initializeApollo()

//   const { data } = await apolloClient.query({
//     query: LAUNCHES_PAST,
//   })

//   return {
//     props: {
//       launches: data,
//     },
//   }
// }

export default Launches
