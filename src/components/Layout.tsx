import { AnimateSharedLayout } from 'framer-motion'

import { Container } from './Container'
import { CTA } from './CTA'
import { DarkModeSwitch } from './DarkModeSwitch'

export const Layout: React.FC = ({ children }) => {
  return (
    <AnimateSharedLayout>
      <Container height="100vh">
        {children}
        <DarkModeSwitch />
        <CTA />
      </Container>
    </AnimateSharedLayout>
  )
}
