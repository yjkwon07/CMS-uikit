import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Avatar: ComponentStyleConfig = {
  parts: ['badge'],
  baseStyle: {
    badge: {
      bg: '#FF4747',
      color: '#fff',
      padding: '10px 11px',
    },
  },

  defaultProps: {},
};

export default Avatar;
