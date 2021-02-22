import { AnimateSharedLayout } from 'framer-motion'

import { Container } from '../components/Container'
import { CTA } from '../components/CTA'
import { DarkModeSwitch } from '../components/DarkModeSwitch'

export const MainLayout: React.FC = ({ children }) => {
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
