import { ButtonProps } from '@chakra-ui/react';

const baseStyles: ButtonProps = {
  w: 9,
  h: 9,
  color: 'text',
  rounded: 'lg',
  pb: 1,
};

export const normalStyles: ButtonProps = {
  ...baseStyles,
};

export const activeStyles: ButtonProps = {
  ...baseStyles,
  color: 'white',
  bg: 'brand.500',
  _hover: {
    bg: 'brand.600',
  },
};

export const separatorStyles: ButtonProps = {
  ...baseStyles,
};
