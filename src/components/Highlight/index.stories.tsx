import { FC } from 'react';

import { Highlight, Heading, useHighlight, Box, Mark, Text } from '@chakra-ui/react';

export default {
  title: 'Typography/Highlight',
  component: Highlight,
  argTypes: {},
};

export const Default: FC = () => {
  const chunkList = useHighlight({
    text: 'With the Highlight component, you can spotlight, emphasize and accentuate words instantly',
    query: ['spotlight', 'emphasize', 'accentuate', 'instantly'],
  });

  return (
    <Heading lineHeight="tall">
      {chunkList.map(({ match, text }) => {
        if (!match) return text;
        return text === 'instantly' ? (
          <Box key={text} as="u">
            {text}
          </Box>
        ) : (
          <Mark key={text} px="2" py="1" bg="teal.100" rounded="full">
            {text}
          </Mark>
        );
      })}
    </Heading>
  );
};

export const Customizing: FC = () => {
  return (
    <Text>
      <Highlight
        query={['spotlight', 'emphasize', 'Accentuate']}
        styles={{ px: '2', py: '1', rounded: 'full', bg: 'teal.100' }}
      >
        With the Highlight component, you can spotlight, emphasize and accentuate words.
      </Highlight>
    </Text>
  );
};
