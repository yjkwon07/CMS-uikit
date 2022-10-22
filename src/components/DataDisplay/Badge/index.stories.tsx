import { Badge, Box, Divider, Flex, Heading, Stack, ThemeTypings, useTheme, Wrap, WrapItem } from '@chakra-ui/react';

export default {
  title: 'DataDisplay/Badge',
  component: Badge,
  argTypes: {},
};

export const Default = () => {
  return <Badge>Default</Badge>;
};

export const SizeVariant = () => {
  const theme = useTheme();

  const badgeProps = theme.components.Badge;
  const VARIANT_LIST = Object.keys(badgeProps.variants || {}) as ThemeTypings['components']['Badge']['variants'][];
  const SIZE_LIST = Object.keys(badgeProps.sizes || {}) as ThemeTypings['components']['Badge']['sizes'][];

  return (
    <Stack divider={<Divider />} spacing={3}>
      {VARIANT_LIST.length ? (
        VARIANT_LIST.map((variant) => (
          <Box key={variant}>
            <Heading mb="16px">{(variant as string).toUpperCase()}</Heading>
            <Stack spacing={3}>
              {SIZE_LIST.length ? (
                SIZE_LIST.map((size) => (
                  <Badge key={size} size={size} variant={variant}>
                    {(size as string).toUpperCase()}
                  </Badge>
                ))
              ) : (
                <Badge variant={variant}>{variant}</Badge>
              )}
            </Stack>
          </Box>
        ))
      ) : (
        <Stack spacing={3}>
          {SIZE_LIST.length &&
            SIZE_LIST.map((size) => (
              <Badge key={size} size={size}>
                {(size as string).toUpperCase()}
              </Badge>
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
            <Badge colorScheme={colorScheme}>{colorScheme.charAt(0).toUpperCase() + colorScheme.slice(1)}</Badge>
          </Flex>
        </WrapItem>
      ))}
    </Wrap>
  );
};
