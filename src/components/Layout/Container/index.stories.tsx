import { Box, Container, VStack } from '@chakra-ui/react';

export default {
  title: 'Layout/Container',
  component: Container,
  argTypes: {},
};

export const Default = () => {
  return (
    <Container>
      There are many benefits to a joint design and development system. Not only does it bring benefits to the design
      team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent look
      and feel, not just in our design specs, but in production
    </Container>
  );
};

export const MaxWidth = () => {
  return (
    <VStack>
      <Container maxW="md" color="white" bg="blue.600">
        &quot;md&quot; Container
      </Container>
      <Container maxW="550px" color="white" bg="purple.600">
        &quot;550px&quot; Container
      </Container>
      <Container maxW="container.sm" color="#262626" bg="green.400">
        &quot;container.sm&quot; Container
      </Container>
    </VStack>
  );
};

export const Centering = () => {
  return (
    <Container maxW="2xl" bg="blue.600" centerContent>
      <Box maxW="md" p="4" color="black" bg="blue.400">
        There are many benefits to a joint design and development system. Not only does it bring benefits to the design
        team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent
        look and feel, not just in our design specs, but in production.
      </Box>
    </Container>
  );
};
