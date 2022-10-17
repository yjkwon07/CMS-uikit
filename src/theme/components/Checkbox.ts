import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Checkbox: ComponentStyleConfig = {
  parts: ['icon', 'container', 'control', 'label'],
  baseStyle: {},
  sizes: {
    xl: {
      control: { w: 6, h: 6 },
      label: { fontSize: 'xl' },
    },
  },
  variants: {},
  defaultProps: {},
};

export default Checkbox;
