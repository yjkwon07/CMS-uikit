import { Box, Center, Circle, HStack, Square } from '@chakra-ui/react';
import { FaPhone as FaPhoneIcon } from 'react-icons/fa';

export default {
  title: 'Layout/Center',
  component: Center,
  argTypes: {},
};

export const Default = () => {
  return (
    <Center h="100px" color="white" bg="brand.600">
      This is the Center
    </Center>
  );
};

export const WithIcons = () => {
  return (
    <HStack>
      <Center w="40px" h="40px" color="white" bg="gray.600">
        <FaPhoneIcon />
      </Center>
      <Center w="40px" h="40px" color="white" bg="gray.600">
        <Box as="span" fontSize="lg" fontWeight="bold">
          1
        </Box>
      </Center>
    </HStack>
  );
};

export const SquareAndCircle = () => {
  return (
    <HStack>
      <Circle color="white" bg="gray.600" size="40px">
        <FaPhoneIcon />
      </Circle>
      <Square color="white" bg="purple.700" size="40px">
        <FaPhoneIcon />
      </Square>
    </HStack>
  );
};
