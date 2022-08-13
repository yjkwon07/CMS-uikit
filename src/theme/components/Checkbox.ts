import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Checkbox: ComponentStyleConfig = {
  baseStyle: {
    control: {
      bg: 'white',
    },
  },
  sizes: {
    xl: { control: { w: 6, h: 6 } },
  },
  defaultProps: {
    colorScheme: 'brand',
  },
};

export default Checkbox;
