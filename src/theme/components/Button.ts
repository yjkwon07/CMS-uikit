import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Button: ComponentStyleConfig = {
  baseStyle: {
    // fontWeight: 600,
  },
  variants: {
    ghost: {},
    outline: {},
    solid: {},
    link: {},
    unstyled: {},
  },
  sizes: {
    lg: {
      height: '55px',
      padding: '0 26px',
    },
    md: {
      height: '48px',
      padding: '0 24px',
    },
    sm: {
      height: '32px',
      padding: '0 16px',
    },
    xs: {
      height: '20px',
      padding: '0 8px',
    },
  },
  defaultProps: {
    variant: 'solid',
    size: 'md',
    colorScheme: 'brand',
  },
};

export default Button;
