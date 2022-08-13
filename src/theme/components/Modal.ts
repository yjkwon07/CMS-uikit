import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Modal: ComponentStyleConfig = {
  parts: ['dialogContainer', 'overlay'],
  baseStyle: {
    overlay: {
      width: '100%',
      height: '100%',
    },
    dialogContainer: {
      width: '100%',
      height: '100%',
    },
  },
};

export default Modal;
