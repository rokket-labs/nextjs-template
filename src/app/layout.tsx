// import AuthContext from 'context/AuthContext'
import { ChakraCustomContextProvider } from 'context/ChakraCustomContext'
import { ReactQueryCustomContextProvider } from 'context/ReactQueryCustomContext'
import { LayoutComponent } from 'layoutcomponent'

// import { headers } from 'next/dist/client/components/headers'
// import getSession from 'lib/getSessionAuth'
import './global.css'

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  //   const session = await getSession(headers().get('cookie') ?? '')

  return (
    <html lang="en">
      <body>
        <ChakraCustomContextProvider>
          {/* <AuthContext session={session}> */}
          <ReactQueryCustomContextProvider>
            <LayoutComponent>{children}</LayoutComponent>
          </ReactQueryCustomContextProvider>
          {/* </AuthContext> */}
        </ChakraCustomContextProvider>
      </body>
    </html>
  )
}

export default RootLayout
