import jwt from 'jsonwebtoken'
import NextAuth, { NextAuthOptions } from 'next-auth'
import { JWT, JWTDecodeParams, JWTEncodeParams } from 'next-auth/jwt'
import Providers from 'next-auth/providers'

const secret = process.env.SECRET || 'VERYSECRETROKKETWOW'

const options: NextAuthOptions = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
  ],
  database: process.env.DATABASE_URL,
  secret,
  session: {
    jwt: true,
  },
  jwt: {
    encode: async props => {
      const { token, secret } = props as JWTEncodeParams
      const jwtClaims = {
        sub: (token?.id as number | string).toString(),
        id: (token?.id as number | string).toString(),
        image: token?.picture || token?.image,
        name: token?.name,
        email: token?.email,
        iat: Date.now() / 1000,
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
      }

      return jwt.sign(jwtClaims, secret, { algorithm: 'HS256' })
    },
    decode: async props => {
      const { token = '', secret } = props as JWTDecodeParams

      return jwt.verify(token, secret, {
        algorithms: ['HS256'],
      }) as JWT
    },
  },
  callbacks: {
    session: async (session, token) => {
      const encodedToken = jwt.sign(token, secret, { algorithm: 'HS256' })

      session.user = token
      session.accessToken = encodedToken

      return Promise.resolve(session)
    },
    jwt: async (token, user) => {
      if (user) token.id = (user as { id: string })?.id.toString()

      return Promise.resolve(token)
    },
  },
  // Add custom pages for login if you need them
  // pages: {
  //   signIn: '/auth/signin',
  //   signOut: '/auth/signout',
  //   error: '/auth/error', // Error code passed in query string as ?error=
  //   verifyRequest: '/auth/verify-request', // (used for check email message)
  //   newUser: null, // If set, new users will be directed here on first sign in
  // },
}

export default NextAuth(options)
