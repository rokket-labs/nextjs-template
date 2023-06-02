const getSession = async (cookie: string) => {
  const response = await fetch(
    `${process.env.LOCAL_AUTH_URL ?? 'http://localhost:3000'}/api/auth/session`,
    {
      headers: {
        cookie,
      },
    },
  )

  const session = await response.json()

  return Object.keys(session).length > 0 ? session : null
}

export default getSession
