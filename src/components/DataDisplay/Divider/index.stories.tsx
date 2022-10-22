import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  ThemeTypings,
  useTheme,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

export default {
  title: 'DataDisplay/Divider',
  component: Divider,
  argTypes: {},
};

export const Default = () => {
  return <Divider />;
};

export const SizeVariant = () => {
  const theme = useTheme();

  const dividerProps = theme.components.Divider;
  const VARIANT_LIST = Object.keys(dividerProps.variants || {}) as ThemeTypings['components']['Divider']['variants'][];
  const SIZE_LIST = Object.keys(dividerProps.sizes || {}) as ThemeTypings['components']['Divider']['sizes'][];

  return (
    <Stack divider={<Divider />} spacing={3}>
      {VARIANT_LIST.length ? (
        VARIANT_LIST.map((variant) => (
          <Box key={variant}>
            <Heading mb="16px">{(variant as string).toUpperCase()}</Heading>
            <Stack spacing={3}>
              {SIZE_LIST.length ? (
                SIZE_LIST.map((size) => (
                  <HStack key={size}>
                    <Divider size={size} variant={variant} />
                    <Text>{(size as string).toUpperCase()}</Text>
                  </HStack>
                ))
              ) : (
                <HStack>
                  <Divider variant={variant} />
                  <Text>{variant}</Text>
                </HStack>
              )}
            </Stack>
          </Box>
        ))
      ) : (
        <Stack spacing={3}>
          {SIZE_LIST.length &&
            SIZE_LIST.map((size) => (
              <HStack key={size}>
                <Divider size={size} />
                <Text>{(size as string).toUpperCase()}</Text>
              </HStack>
            ))}
        </Stack>
      )}
    </Stack>
  );
};

export const ColorScheme = () => {
  const theme = useTheme();

  const colorsProps = theme.colors;
  const COLOR_LIST = Object.keys(colorsProps).filter(
    (color) => typeof colorsProps[color] === 'object',
  ) as ThemeTypings['colors'][];

  return (
    <Wrap spacing={4}>
      {COLOR_LIST.map((colorScheme) => (
        <WrapItem key={colorScheme}>
          <Flex
            direction="column"
            rowGap={3}
            w="300px"
            bgImage={colorScheme.includes('white') ? 'url("https://bit.ly/2Z4KKcF")' : undefined}
            bgPosition="center"
          >
            <HStack>
              <Divider colorScheme={colorScheme} />
              <Text>{colorScheme.charAt(0).toUpperCase() + colorScheme.slice(1)}</Text>
            </HStack>
          </Flex>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export const Orientation = () => {
  return (
    <Center h="50px">
      <Divider orientation="vertical" />
    </Center>
  );
};
