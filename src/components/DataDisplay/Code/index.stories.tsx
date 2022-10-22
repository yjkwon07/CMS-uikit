import {
  Alert,
  AlertIcon,
  Box,
  Code,
  Divider,
  Flex,
  Heading,
  Stack,
  ThemeTypings,
  useTheme,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

export default {
  title: 'DataDisplay/Code',
  component: Code,
  argTypes: {},
};

export const Default = () => {
  return (
    <>
      <Alert status="info">
        <AlertIcon />
        font family of `mono` for displaying code.
      </Alert>
      <Code>Hello world</Code>
    </>
  );
};

export const SizeVariant = () => {
  const theme = useTheme();

  const CodeProps = theme.components.Code;
  const VARIANT_LIST = Object.keys(CodeProps.variants || {}) as ThemeTypings['components']['Code']['variants'][];
  const SIZE_LIST = Object.keys(CodeProps.sizes || {}) as ThemeTypings['components']['Code']['sizes'][];

  return (
    <Stack divider={<Divider />} spacing={3}>
      {VARIANT_LIST.length ? (
        VARIANT_LIST.map((variant) => (
          <Box key={variant}>
            <Heading mb="16px">{(variant as string).toUpperCase()}</Heading>
            <Stack spacing={3}>
              {SIZE_LIST.length ? (
                SIZE_LIST.map((size) => (
                  <Code key={size} size={size} variant={variant}>
                    {(size as string).toUpperCase()}
                  </Code>
                ))
              ) : (
                <Code variant={variant}>{variant}</Code>
              )}
            </Stack>
          </Box>
        ))
      ) : (
        <Stack spacing={3}>
          {SIZE_LIST.length &&
            SIZE_LIST.map((size) => (
              <Code key={size} size={size}>
                {(size as string).toUpperCase()}
              </Code>
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
            <Code colorScheme={colorScheme}>{colorScheme.charAt(0).toUpperCase() + colorScheme.slice(1)}</Code>
          </Flex>
        </WrapItem>
      ))}
    </Wrap>
  );
};
