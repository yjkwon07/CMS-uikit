import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Select: ComponentStyleConfig = {
  variants: {
    outline: {
      field: {
        borderRadius: 'lg',
        borderColor: 'border.500',
        color: 'gray.900',
      },
    },
  },
  defaultProps: {
    focusBorderColor: 'brand.500',
  },
};

export default Select;
