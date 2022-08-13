import type { ComponentStyleConfig } from '@chakra-ui/theme';

import colors from '../foundations/colors';

const Divider: ComponentStyleConfig = {
  baseStyle: {
    borderColor: `${colors.border[500]}`,
  },
};

export default Divider;
