import { colors } from 'theme/foundations/colors'

export const buttonStyles = {
  Button: {
    variants: {
      'custom-button': {
        bg: colors.drimo500,
        color: colors.white,
        padding: '16px 24px',
        borderRadius: '50px',
        _hover: {
          boxShadow: 'lg',
          bg: colors.drimo200,
        },
        _focus: {
          boxShadow: 'none',
          outline: 'none',
        },
      },
      'custom-ghost': {
        bg: 'transparent',
        color: colors.white,
        padding: '16px 24px',
        borderRadius: '50px',
        _hover: {
          boxShadow: 'lg',
          bg: colors.drimo50,
        },
        _focus: {
          boxShadow: 'none',
          outline: 'none',
        },
      },
    },
  },
}
