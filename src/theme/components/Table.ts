import type { ComponentStyleConfig } from '@chakra-ui/theme';

const Table: ComponentStyleConfig = {
  parts: ['th', 'td', 'table'],
  baseStyle: {
    table: {
      th: {
        color: 'gray.700',
        borderBottom: '1px solid',
        borderBottomColor: 'border.500',
        textTransform: 'none',
      },
      td: {
        color: 'gray.700',
        fontSize: 'sm',
        borderBottomColor: 'border.500',
      },
    },
  },

  defaultProps: {},
};

export default Table;
