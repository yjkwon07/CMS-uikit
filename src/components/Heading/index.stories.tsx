import { FC } from 'react';

import { Stack, Heading } from '@chakra-ui/react';

export default {
  title: 'Typography/Heading',
  component: Heading,
  argTypes: {},
};

export const Default: FC = () => {
  return (
    <Stack spacing={6}>
      <Heading as="h1" bg="orange.200" size="4xl">
        (4xl) 가나다라마바사아자차카타마파하
      </Heading>
      <Heading as="h1" bg="orange.200" size="4xl">
        (4xl) abcdefghijklmnopqrstuvwxyz
      </Heading>
      <Heading as="h2" bg="orange.200" size="3xl">
        (3xl) 가나다라마바사아자차카타마파하
      </Heading>
      <Heading as="h2" bg="orange.200" size="3xl">
        (3xl) abcdefghijklmnopqrstuvwxyz
      </Heading>
      <Heading as="h2" bg="orange.200" size="2xl">
        (2xl) 가나다라마바사아자차카타마파하 abcdefghijklmnopqrstuvwxyz
      </Heading>
      <Heading as="h2" bg="orange.200" size="xl">
        (xl) 가나다라마바사아자차카타마파하 abcdefghijklmnopqrstuvwxyz
      </Heading>
      <Heading as="h3" bg="orange.200" size="lg">
        (lg) 가나다라마바사아자차카타마파하 abcdefghijklmnopqrstuvwxyz
      </Heading>
      <Heading as="h4" bg="orange.200" size="md">
        (md) 가나다라마바사아자차카타마파하 abcdefghijklmnopqrstuvwxyz
      </Heading>
      <Heading as="h5" bg="orange.200" size="sm">
        (sm) 가나다라마바사아자차카타마파하 abcdefghijklmnopqrstuvwxyz
      </Heading>
      <Heading as="h6" bg="orange.200" size="xs">
        (xs) 가나다라마바사아자차카타마파하 abcdefghijklmnopqrstuvwxyz
      </Heading>
    </Stack>
  );
};

export const Truncate: FC = () => {
  return (
    <>
      {/* Basic version */}
      <Heading noOfLines={1}>Basic text writing, including headings, body text, lists, and more.</Heading>
    </>
  );
};
