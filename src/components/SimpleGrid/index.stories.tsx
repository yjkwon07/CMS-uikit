import { Box, SimpleGrid } from '@chakra-ui/react';

export default {
  title: 'Layout/SimpleGrid',
  component: SimpleGrid,
  argTypes: {},
};

export const Default = () => {
  return (
    <SimpleGrid columns={2} spacing={10}>
      <Box h="80px" bg="tomato" />
      <Box h="80px" bg="tomato" />
      <Box h="80px" bg="tomato" />
      <Box h="80px" bg="tomato" />
      <Box h="80px" bg="tomato" />
    </SimpleGrid>
  );
};

export const Responsive = () => {
  return (
    <SimpleGrid columns={[2, null, 3]} spacing="40px">
      <Box h="80px" bg="tomato" />
      <Box h="80px" bg="tomato" />
      <Box h="80px" bg="tomato" />
      <Box h="80px" bg="tomato" />
      <Box h="80px" bg="tomato" />
    </SimpleGrid>
  );
};

export const AutoResponsive = () => {
  return (
    <SimpleGrid minChildWidth="120px" spacing="40px">
      <Box h="80px" bg="tomato" />
      <Box h="80px" bg="tomato" />
      <Box h="80px" bg="tomato" />
      <Box h="80px" bg="tomato" />
      <Box h="80px" bg="tomato" />
      <Box h="80px" bg="tomato" />
    </SimpleGrid>
  );
};

export const Spacing = () => {
  return (
    <SimpleGrid columns={2} spacingX="40px" spacingY="20px">
      <Box h="80px" bg="tomato" />
      <Box h="80px" bg="tomato" />
      <Box h="80px" bg="tomato" />
      <Box h="80px" bg="tomato" />
      <Box h="80px" bg="tomato" />
    </SimpleGrid>
  );
};
