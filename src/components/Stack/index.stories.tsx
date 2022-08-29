import { Box, HStack, Stack, StackDivider, VStack } from '@chakra-ui/react';

export default {
  title: 'Layout/Stack',
  component: Stack,
  argTypes: {},
};

export const Horizontal = () => {
  return (
    <HStack spacing="24px">
      <Box w="40px" h="40px" bg="yellow.200">
        1
      </Box>
      <Box w="40px" h="40px" bg="tomato">
        2
      </Box>
      <Box w="40px" h="40px" bg="pink.100">
        3
      </Box>
    </HStack>
  );
};

export const Responsive = () => {
  return (
    <Stack direction={[null, 'row', 'column']} spacing="24px">
      <Box w="40px" h="40px" bg="yellow.200">
        1
      </Box>
      <Box w="40px" h="40px" bg="tomato">
        2
      </Box>
      <Box w="40px" h="40px" bg="pink.100">
        3
      </Box>
    </Stack>
  );
};

export const VStackDivider = () => {
  return (
    <VStack align="stretch" divider={<StackDivider borderColor="gray.200" />} spacing={4}>
      <Box h="40px" bg="yellow.200">
        1
      </Box>
      <Box h="40px" bg="tomato">
        2
      </Box>
      <Box h="40px" bg="pink.100">
        3
      </Box>
    </VStack>
  );
};
