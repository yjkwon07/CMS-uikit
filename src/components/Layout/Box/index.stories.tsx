import { Box, Stack, Text } from '@chakra-ui/react';

export default {
  title: 'Layout/Box',
  component: Box,
  argTypes: {},
};

export const Default = () => {
  return (
    <Stack spacing={10}>
      <Box>
        <Text>(default) 가나다라마바사아자차카타마파하 abcdefghijklmnopqrstuvwxyz</Text>
      </Box>
      <Box color="rgba(137, 137, 137)" bg="#33f3f3">
        <Text>(default) 가나다라마바사아자차카타마파하 abcdefghijklmnopqrstuvwxyz</Text>
      </Box>
    </Stack>
  );
};
