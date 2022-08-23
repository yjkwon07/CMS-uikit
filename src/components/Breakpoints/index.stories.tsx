import { Alert, AlertIcon, Box, Flex, Text, useBreakpoint, useTheme } from '@chakra-ui/react';

export default {
  title: 'Theme/Breakpoints',
};

export const Default = () => {
  const bp = useBreakpoint();

  const theme = useTheme();
  const breakpointsProps = theme.breakpoints;

  return (
    <Flex direction="column" rowGap="5" p={4}>
      <Alert status="info">
        <AlertIcon />
        Adjust the size of the browser.
      </Alert>
      <Box p={5} bg="green.300">
        <Text fontSize="2xl">{`${bp} ${breakpointsProps[bp]}`}</Text>
      </Box>
    </Flex>
  );
};
