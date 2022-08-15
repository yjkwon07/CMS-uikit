import { css, Global } from '@emotion/react';

export function Fonts() {
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');
        body {
          font-family: ${'Noto Sans KR'};
        }
      `}
    />
  );
}
