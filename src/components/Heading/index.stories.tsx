import { FC } from 'react';

import { Stack, Heading, Box } from '@chakra-ui/react';

export default {
  title: 'Typography/Heading',
  component: Heading,
  argTypes: {},
};

export const Default: FC = () => {
  return <Heading>(default) 가나다라마바사아자차카타마파하 abcdefghijklmnopqrstuvwxyz</Heading>;
};

export const Size: FC = () => {
  return (
    <Stack spacing={6}>
      <Box>
        <Heading mb="16px" color="cyan.600">
          (h1-4xl)
        </Heading>
        <Stack spacing={6}>
          <Heading as="h1" bg="blue.100" size="4xl">
            (가나다라마바사아자차카타마파하
          </Heading>
          <Heading as="h1" bg="blue.100" size="4xl">
            abcdefghijklmnopqrstuvwxyz
          </Heading>
        </Stack>
      </Box>

      <Box>
        <Heading mb="16px" color="cyan.600">
          (h2-3xl)
        </Heading>
        <Stack spacing={6}>
          <Heading as="h2" bg="blue.100" size="3xl">
            가나다라마바사아자차카타마파하
          </Heading>
          <Heading as="h2" bg="blue.100" size="3xl">
            abcdefghijklmnopqrstuvwxyz
          </Heading>
        </Stack>
      </Box>

      <Box>
        <Heading mb="16px" color="cyan.600">
          (h2-2xl)
        </Heading>
        <Stack spacing={6}>
          <Heading as="h2" bg="blue.100" size="2xl">
            가나다라마바사아자차카타마파하
          </Heading>
          <Heading as="h2" bg="blue.100" size="2xl">
            abcdefghijklmnopqrstuvwxyz
          </Heading>
        </Stack>
      </Box>

      <Box>
        <Heading mb="16px" color="cyan.600">
          (h2-xl)
        </Heading>
        <Stack spacing={6}>
          <Heading as="h2" bg="blue.100" size="xl">
            가나다라마바사아자차카타마파하 abcdefghijklmnopqrstuvwxyz
          </Heading>
        </Stack>
      </Box>

      <Box>
        <Heading mb="16px" color="cyan.600">
          (h3-lg)
        </Heading>
        <Stack spacing={6}>
          <Heading as="h3" bg="blue.100" size="lg">
            가나다라마바사아자차카타마파하 abcdefghijklmnopqrstuvwxyz
          </Heading>
        </Stack>
      </Box>

      <Box>
        <Heading mb="16px" color="cyan.600">
          (h4-md)
        </Heading>
        <Stack spacing={6}>
          <Heading as="h4" bg="blue.100" size="md">
            가나다라마바사아자차카타마파하 abcdefghijklmnopqrstuvwxyz
          </Heading>
        </Stack>
      </Box>

      <Box>
        <Heading mb="16px" color="cyan.600">
          (h5-sm)
        </Heading>
        <Stack spacing={6}>
          <Heading as="h5" bg="blue.100" size="sm">
            가나다라마바사아자차카타마파하 abcdefghijklmnopqrstuvwxyz
          </Heading>
        </Stack>
      </Box>

      <Box>
        <Heading mb="16px" color="cyan.600">
          (h6-xs)
        </Heading>
        <Stack spacing={6}>
          <Heading as="h6" bg="blue.100" size="xs">
            가나다라마바사아자차카타마파하 abcdefghijklmnopqrstuvwxyz
          </Heading>
        </Stack>
      </Box>
    </Stack>
  );
};

export const Truncate: FC = () => {
  return <Heading noOfLines={1}>Basic text writing, including headings, body text, lists, and more.</Heading>;
};
