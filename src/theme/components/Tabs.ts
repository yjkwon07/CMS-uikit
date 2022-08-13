import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Tabs: ComponentStyleConfig = {
  parts: ['tabpanel', 'tab'],
  baseStyle: {
    tabpanel: {
      padding: 0,
    },
  },
};

export default Tabs;
