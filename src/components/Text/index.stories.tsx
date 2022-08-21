import { FC } from 'react';

import { Box, Heading, Stack, Text, ThemeTypings, useTheme } from '@chakra-ui/react';

export default {
  title: 'Typography/Text',
  component: Text,
  argTypes: {},
};

export const Default: FC = () => {
  return <Text>(default) 가나다라마바사아자차카타마파하 abcdefghijklmnopqrstuvwxyz</Text>;
};

export const FontSize: FC = () => {
  const theme = useTheme();

  const FONT_SIZE_LIST = Object.keys(theme.fontSizes).reverse() as ThemeTypings['fontSizes'][];

  return (
    <Stack spacing={3}>
      {Object.values(FONT_SIZE_LIST).map((fontSize) => (
        <Box key={fontSize}>
          <Heading mb="16px" color="cyan.600">
            ({fontSize})
          </Heading>
          <Stack spacing={6}>
            <Text fontSize={fontSize} bg="blue.100">
              ({fontSize}) 가나다라마바사아자차카타마파하 abcdefghijklmnopqrstuvwxyz
            </Text>
          </Stack>
        </Box>
      ))}
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
    <Box>
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
    </Box>
  );
};
