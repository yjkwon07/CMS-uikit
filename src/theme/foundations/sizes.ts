const breakPoints = ['base', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'] as const;
type BreakPoints = Record<typeof breakPoints[number], string>;
export type BreakPointsObject = Partial<BreakPoints>;

export const breakpoints: BreakPointsObject = {
  base: '',
  xs: '480px',
  sm: '768px',
  md: '896px',
  lg: '1200px',
  xl: '1920px',
  '2xl': '2100',
};

export const sizes: { container: BreakPointsObject } = {
  container: {
    sm: breakpoints.sm,
    md: breakpoints.md,
  },
};
