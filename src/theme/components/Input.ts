import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Input: ComponentStyleConfig = {
  parts: ['addon', 'field'],
  variants: {
    outline: {
      field: {
        borderRadius: 'lg',
        borderColor: 'border.500',
        color: 'gray.900',
        '&[readonly]': { border: 'none', textAlign: 'right', paddingRight: 0 },
      },
      addon: {
        bg: 'transparent',
      },
    },
  },
  defaultProps: {
    focusBorderColor: 'brand.500',
  },
};

export default Input;
