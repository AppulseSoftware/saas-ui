import { defineSlotRecipe } from '#system'

export const navbarSlotRecipe = defineSlotRecipe({
  className: 'sui-navbar',
  slots: ['root', 'content', 'brand', 'item'],
  base: {
    root: {
      display: 'flex',
      zIndex: 'layer-3',
      width: 'full',
      height: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      top: 0,
      insetX: 0,
      transitionProperty: 'common',
      transitionDuration: 'normal',
      transitionTimingFunction: 'ease-in-out',
      _hidden: {
        transform: 'translateY(-100%)',
      },
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: 'full',
      height: 'var(--navbar-height)',
      flexWrap: 'nowrap',
    },
    brand: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: 'full',
      bg: 'transparent',
      textDecoration: 'none',
      color: 'inherit',
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
    },
    item: {
      bg: 'transparent',
      color: 'currentColor',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      borderRadius: 'md',
      transitionProperty: 'common',
      transitionDuration: 'normal',
      lineHeight: 1,
      _focusVisible: {
        outline: 'none',
        boxShadow: 'outline',
      },
      _hover: {
        bg: 'blackAlpha.100',
        textDecoration: 'none',
        _dark: {
          bg: 'whiteAlpha.200',
        },
      },
      _active: {
        fontWeight: 'semibold',
      },
    },
  },
  variants: {
    variant: {
      neutral: {
        root: {
          bg: 'bg.panel',
          color: 'fg',
        },
      },
      solid: {
        root: {
          bg: 'colorPalette.500',
          color: 'colorPalette.contrast',
        },
      },
    },
    size: {
      md: {
        root: {
          fontSize: 'sm',
        },
        content: {
          px: {
            base: 4,
            lg: 6,
          },
          gap: 4,
        },
        item: {
          px: 3,
          h: 8,
        },
      },
    },
  },
  defaultVariants: {
    variant: 'neutral',
    size: 'md',
  },
})
