export const shadeColor = (color: string, amount: number) =>
  `#${color
    .replace(/^#/, '')
    .replace(/../g, (color: string) =>
      `0${Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)}`.slice(-2),
    )}`;
