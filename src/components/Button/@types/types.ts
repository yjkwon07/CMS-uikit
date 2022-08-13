import { ElementType, ReactNode } from 'react';

export const SCALE = {
  LG: 'lg',
  MD: 'md',
  SM: 'sm',
  XS: 'xs',
} as const;

export const VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  GHOST: 'ghost',
  TEXT: 'text',
} as const;

export type Scale = typeof SCALE[keyof typeof SCALE];
export type Variant = typeof VARIANT[keyof typeof VARIANT];
