import { Alert, AlertIcon, Box, Flex, Text, ThemeTypings, useBreakpoint, useTheme } from '@chakra-ui/react';

export default {
  title: 'Theme/Breakpoints',
};

export const Default = () => {
  const theme = useTheme();
  const breakpointsProps = theme.breakpoints;
  const BREAKPOINT_LIST = Object.keys(breakpointsProps).sort(
    (a, b) => Number(breakpointsProps[a].replace(/(px)/, '')) - Number(breakpointsProps[b].replace(/(px)/, '')),
  ) as ThemeTypings['breakpoints'][];

  return (
    <Flex direction="column" rowGap="5" p={4}>
      {BREAKPOINT_LIST.map((breakpoint) => (
        <Box
          key={breakpoint}
          w={breakpointsProps[breakpoint] !== '0px' ? breakpointsProps[breakpoint] : 'full'}
          p={5}
          bg={breakpointsProps[breakpoint] !== '0px' ? 'green.300' : 'white'}
        >
          <Text fontSize="2xl">{`${breakpoint} ${breakpointsProps[breakpoint]}`}</Text>
        </Box>
      ))}
    </Flex>
  );
};

export const Adjust = () => {
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
