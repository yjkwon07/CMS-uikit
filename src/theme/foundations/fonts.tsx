import { css, Global } from '@emotion/react';

import { languages, useLanguage } from '@/context/LanguageProvider';

export function Fonts() {
  const language = useLanguage();

  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap');
        body {
          font-family: ${language === languages.EN ? 'Manrope' : 'Noto Sans KR'};
        }
      `}
    />
  );
}
