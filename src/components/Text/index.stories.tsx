import { FC } from 'react';

import { Stack, Text } from '@chakra-ui/react';

export default {
  title: 'Typography/Text',
  component: Text,
  argTypes: {},
};

export const Default: FC = () => {
  return (
    <Stack spacing={3}>
      <Text fontSize="6xl">(6xl) In Text</Text>
      <Text fontSize="5xl">(5xl) In Text</Text>
      <Text fontSize="4xl">(4xl) In Text</Text>
      <Text fontSize="3xl">(3xl) In Text</Text>
      <Text fontSize="2xl">(2xl) In Text</Text>
      <Text fontSize="xl">(xl) In Text</Text>
      <Text fontSize="lg">(lg) In Text</Text>
      <Text fontSize="md">(md) In Text</Text>
      <Text fontSize="sm">(sm) In Text</Text>
      <Text fontSize="xs">(xs) In Text</Text>
    </Stack>
  );
};

export const Truncate: FC = () => {
  return (
    <>
      {/* Basic version */}
      <Text noOfLines={1}>
        &quot;The quick brown fox jumps over the lazy dog&quot; is an English-language pangram—a sentence that contains
        all of the letters of the English alphabet. Owing to its existence, Chakra was created.
      </Text>
      {/* Responsive version */}
      <Text noOfLines={[1, 2, 3]}>
        &quot;The quick brown fox jumps over the lazy dog&quot; is an English-language pangram—a sentence that contains
        all of the letters of the English alphabet. Owing to its existence, Chakra was created.
      </Text>
    </>
  );
};

export const InspectElement: FC = () => {
  return (
    <>
      <Text as="i">Italic</Text>
      <br />
      <Text as="u">Underline</Text>
      <br />
      <Text as="abbr">I18N</Text>
      <br />
      <Text as="cite">Citation</Text>
      <br />
      <Text as="del">Deleted</Text>
      <br />
      <Text as="em">Emphasis</Text>
      <br />
      <Text as="ins">Inserted</Text>
      <br />
      <Text as="kbd">Ctrl + C</Text>
      <br />
      <Text as="mark">Highlighted</Text>
      <br />
      <Text as="s">Strikethrough</Text>
      <br />
      <Text as="samp">Sample</Text>
      <br />
      <Text as="sub">sub</Text>
      <br />
      <Text as="sup">sup</Text>
    </>
  );
};
