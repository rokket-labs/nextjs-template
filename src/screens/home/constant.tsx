import Image from 'next/image'

import {
  ApolloLogo,
  ChakraUILogo,
  NextJsLogo,
  ReactQueryLogo,
} from 'assets/svg'

export const STACK = [
  { label: 'Chakra UI', url: 'https://chakra-ui.com/', logo: <ChakraUILogo /> },
  { label: 'NextJS', url: 'https://nextjs.org/', logo: <NextJsLogo /> },
  {
    label: 'Apollo Graphql',
    url: 'https://www.apollographql.com/',
    logo: <ApolloLogo />,
  },
  {
    label: 'NextAuth',
    url: 'https://next-auth.js.org/',
    logo: (
      <Image
        src={'/NextAuth.png'}
        alt="Next Auth logo"
        width={80}
        height={80}
      />
    ),
  },
  {
    label: 'React Query',
    url: 'https://react-query-v3.tanstack.com/',
    logo: <ReactQueryLogo />,
  },
]
