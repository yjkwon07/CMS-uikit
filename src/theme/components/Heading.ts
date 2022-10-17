import { ComponentStyleConfig } from '@chakra-ui/react';

/** @see https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/theme/src/components/heading.ts */

const Heading: ComponentStyleConfig = {
  sizes: {
    '4xl': {
      lineHeight: '6.3rem',
    },
    '3xl': {
      lineHeight: '5.3rem',
    },
    '2xl': {
      lineHeight: '4.2rem',
    },
    xl: {
      lineHeight: '3.15rem',
    },
    lg: {
      lineHeight: '2.55rem',
    },
    md: {
      lineHeight: '1.75rem',
    },
    sm: {
      lineHeight: '1.4rem',
    },
    xs: {
      lineHeight: '1.25rem',
    },
  },
  defaultProps: {
    size: 'xl',
  },
};

export default Heading;
