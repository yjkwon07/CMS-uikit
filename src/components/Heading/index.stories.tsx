import { FC } from 'react';

import { Stack, Heading, Box, useTheme, ThemeTypings, As, Flex, Alert, AlertIcon } from '@chakra-ui/react';

export default {
  title: 'Typography/Heading',
  component: Heading,
  argTypes: {},
};

export const Default: FC = () => {
  return <Heading>(default) 가나다라마바사아자차카타마파하 abcdefghijklmnopqrstuvwxyz</Heading>;
};

export const Size: FC = () => {
  const theme = useTheme();

  const SIZE_LIST = Object.keys(theme.components.Heading.sizes) as ThemeTypings['components']['Heading']['sizes'][];

  const sizeToAs = {
    '4xl': 'h1' as As<any>,
    '3xl': 'h2' as As<any>,
    '2xl': 'h2' as As<any>,
    xl: 'h2' as As<any>,
    lg: 'h3' as As<any>,
    md: 'h4' as As<any>,
    sm: 'h5' as As<any>,
    xs: 'h6' as As<any>,
  };
  const defaultAs = 'h2';

  return (
    <Flex direction="column" rowGap="5" p={4}>
      <Alert status="info">
        <AlertIcon />
        as &apos;h[number]&apos; is no style effect
      </Alert>
      <Stack spacing={6}>
        {SIZE_LIST.map((size) => (
          <Box key={size}>
            <Heading mb="16px" color="cyan.600">
              ({(sizeToAs[size] as string) || defaultAs}-{size})
            </Heading>
            <Stack spacing={6}>
              <Heading as={sizeToAs[size] || defaultAs} bg="blue.100" size={size}>
                (가나다라마바사아자차카타마파하
              </Heading>
              <Heading as={sizeToAs[size] || defaultAs} bg="blue.100" size={size}>
                abcdefghijklmnopqrstuvwxyz
              </Heading>
            </Stack>
          </Box>
        ))}
      </Stack>
    </Flex>
  );
};

export const Truncate: FC = () => {
  return <Heading noOfLines={1}>Basic text writing, including headings, body text, lists, and more.</Heading>;
};
