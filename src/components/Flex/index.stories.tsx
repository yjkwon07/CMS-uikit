import { Box, Button, ButtonGroup, Flex, Heading, Spacer, Stack } from '@chakra-ui/react';

export default {
  title: 'Layout/Flex',
  component: Flex,
  argTypes: {},
};

export const Default = () => {
  return (
    <Flex direction="column" gap={20}>
      <Flex justify="space-between" w="100%" mt="40px" color="white" bg="gray.600">
        <span>Left</span>
        <span>right</span>
      </Flex>
      <Flex justify="center" w="100%" mt="8px" color="white" bg="gray.600">
        <span>center</span>
      </Flex>
    </Flex>
  );
};

export const CombineSpacer = () => {
  return (
    <Stack>
      <Flex>
        <Box p="4" bg="red.400">
          Box 1
        </Box>
        <Spacer />
        <Box p="4" bg="green.400">
          Box 2
        </Box>
      </Flex>
      <Flex align="center" gap="2" minW="max-content">
        <Box p="2">
          <Heading size="md">Chakra App</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Button colorScheme="teal">Sign Up</Button>
          <Button colorScheme="teal">Log in</Button>
        </ButtonGroup>
      </Flex>
    </Stack>
  );
};
