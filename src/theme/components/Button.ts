import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Button: ComponentStyleConfig = {
  baseStyle: {},
  variants: {
    ghost: {},
    outline: {},
    solid: {},
    link: {},
    unstyled: {
      display: 'inline-flex',
    },
  },
  sizes: {
    lg: {
      height: '55px',
      px: '26px',
      minW: 14,
    },
    md: {
      height: '48px',
      px: '24px',
      minW: 12,
    },
    sm: {
      height: '32px',
      px: '16px',
      minW: 8,
    },
    xs: {
      height: 6,
      px: '8px',
      minW: 6,
    },
  },
  defaultProps: {
    variant: 'solid',
    size: 'md',
  },
};

export default Button;
