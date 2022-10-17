import type { ComponentStyleConfig } from '@chakra-ui/theme';

/** @see https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/theme/src/components/checkbox.ts */

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
