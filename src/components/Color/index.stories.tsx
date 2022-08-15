import { FC, useCallback, useEffect, useState } from 'react';

import {
  Alert,
  AlertIcon,
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Text,
  ThemeTypings,
  useClipboard,
  useTheme,
  useToast,
} from '@chakra-ui/react';

export default {
  title: 'Theme/Colors',
};

export const Default: FC = () => {
  const [color, setColor] = useState('');
  const { hasCopied, value, onCopy } = useClipboard(color);

  const toast = useToast();

  const theme = useTheme();

  const colorsProps = theme.colors;
  const COLOR_LIST = Object.keys(colorsProps) as ThemeTypings['colors'][];

  const handleCopy = useCallback(
    (color: string) => () => {
      setColor(color);
      onCopy();
    },
    [onCopy],
  );

  useEffect(() => {
    if (hasCopied) {
      toast({
        title: 'copy complete',
        description: value,
        status: 'success',
        duration: 1000,
        isClosable: true,
      });
    }
  }, [hasCopied, toast, value]);

  return (
    <Grid rowGap="5">
      <Alert status="info">
        <AlertIcon />
        If you want to get the color code, click color box
      </Alert>
      {COLOR_LIST.map((color) => {
        if (typeof colorsProps[color] === 'object') {
          return (
            <Box>
              <Heading mb="2" size="md">
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </Heading>
              <HStack spacing={1.5}>
                {Object.keys(colorsProps[color]).map((number) => (
                  <Box key={number}>
                    <Flex align="center" justify="center" direction="column" boxSize="16">
                      <Box
                        boxSize="10"
                        bg={colorsProps[color][number]}
                        borderRadius="md"
                        shadow="inner"
                        onClick={handleCopy(colorsProps[color][number])}
                      />
                      <Flex align="center" justify="center">
                        <Text fontSize="sm" fontWeight="bold">
                          {number}
                        </Text>
                      </Flex>
                    </Flex>
                  </Box>
                ))}
              </HStack>
            </Box>
          );
        }
        return (
          <Box key={color}>
            <Heading mb="2" size="md">
              {color.charAt(0).toUpperCase() + color.slice(1)}
            </Heading>
            <Flex align="center" justify="center" direction="column" boxSize="16">
              <Box
                boxSize="10"
                bg={colorsProps[color]}
                borderRadius="md"
                shadow="inner"
                onClick={handleCopy(colorsProps[color])}
              />
            </Flex>
          </Box>
        );
      })}
    </Grid>
  );
};
