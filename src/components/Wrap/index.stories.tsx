import { Center, Wrap, WrapItem } from '@chakra-ui/react';

export default {
  title: 'Layout/Wrap',
  component: Wrap,
  argTypes: {},
};

export const Default = () => {
  return (
    <Wrap>
      <WrapItem>
        <Center w="180px" h="80px" bg="red.200">
          Box 1
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="80px" bg="green.200">
          Box 2
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="80px" bg="tomato">
          Box 3
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="80px" bg="blue.200">
          Box 4
        </Center>
      </WrapItem>
    </Wrap>
  );
};

export const Spacing = () => {
  return (
    <Wrap spacing="30px">
      <WrapItem>
        <Center w="180px" h="80px" bg="red.200">
          Box 1
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="80px" bg="green.200">
          Box 2
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="80px" bg="tomato">
          Box 3
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="80px" bg="blue.200">
          Box 4
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="80px" bg="blackAlpha.500">
          Box 5
        </Center>
      </WrapItem>
    </Wrap>
  );
};

export const Alignment = () => {
  return (
    <Wrap align="center" spacing="30px">
      <WrapItem>
        <Center w="180px" h="80px" bg="red.200">
          Box 1
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="40px" bg="green.200">
          Box 2
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="120px" h="80px" bg="tomato">
          Box 3
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="40px" bg="blue.200">
          Box 4
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="80px" bg="blackAlpha.500">
          Box 5
        </Center>
      </WrapItem>
    </Wrap>
  );
};

export const Justify = () => {
  return (
    <Wrap justify="center" spacing="30px">
      <WrapItem>
        <Center w="180px" h="80px" bg="red.200">
          Box 1
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="80px" bg="green.200">
          Box 2
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="120px" h="80px" bg="tomato">
          Box 3
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="80px" bg="blue.200">
          Box 4
        </Center>
      </WrapItem>
      <WrapItem>
        <Center w="180px" h="80px" bg="blackAlpha.500">
          Box 5
        </Center>
      </WrapItem>
    </Wrap>
  );
};
