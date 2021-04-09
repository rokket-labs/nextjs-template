import { Switch, useColorMode } from '@chakra-ui/react'

export const DarkModeSwitch: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <Switch
      position="fixed"
      top="1rem"
      right="1rem"
      colorScheme="green"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  )
}
