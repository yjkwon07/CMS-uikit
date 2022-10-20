import {
  Box,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Switch,
  Text,
  ThemeTypings,
  useTheme,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

export default {
  title: 'Forms/Switch',
  component: Switch,
  argTypes: {},
};

export const Default = () => {
  return (
    <FormControl alignItems="center" display="flex">
      <FormLabel mb="0" htmlFor="email-alerts">
        Enable email alerts?
      </FormLabel>
      <Switch id="email-alerts" />
    </FormControl>
  );
};

export const SizeVariant = () => {
  const theme = useTheme();

  const switchProps = theme.components.Switch;
  const VARIANT_LIST = Object.keys(switchProps.variants || {}) as ThemeTypings['components']['Switch']['variants'][];
  const SIZE_LIST = Object.keys(switchProps.sizes || {}) as ThemeTypings['components']['Switch']['sizes'][];

  return (
    <Stack divider={<Divider />} spacing={3}>
      {VARIANT_LIST.length ? (
        VARIANT_LIST.map((variant) => (
          <Box key={variant}>
            <Heading mb="16px">{(variant as string).toUpperCase()}</Heading>
            <Stack spacing={3}>
              {SIZE_LIST.map((size) => (
                <HStack key={size}>
                  <Switch size={size} variant={variant} />
                  <Text>{size.toUpperCase()}</Text>
                </HStack>
              ))}
              <HStack>
                <Switch size="sm" variant={variant} />
                <Text>Disabled</Text>
              </HStack>
            </Stack>
          </Box>
        ))
      ) : (
        <Stack spacing={3}>
          {SIZE_LIST.map((size) => (
            <HStack key={size}>
              <Switch size={size} />
              <Text>{size.toUpperCase()}</Text>
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
              <Switch colorScheme={colorScheme} isChecked size="md" />
              <Text>{colorScheme.charAt(0).toUpperCase() + colorScheme.slice(1)}</Text>
            </HStack>
            <HStack>
              <Switch colorScheme={colorScheme} isChecked isDisabled size="sm" />
              <Text>Disabled</Text>
            </HStack>
          </Flex>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export const StateDependingBehavior = () => {
  return (
    <FormControl as={SimpleGrid} columns={{ base: 2, lg: 4 }}>
      <FormLabel htmlFor="isChecked">isChecked:</FormLabel>
      <Switch id="isChecked" isChecked />

      <FormLabel htmlFor="isDisabled">isDisabled:</FormLabel>
      <Switch defaultChecked id="isDisabled" isDisabled />

      <FormLabel htmlFor="isFocusable">isFocusable:</FormLabel>
      <Switch id="isFocusable" isDisabled isFocusable />

      <FormLabel htmlFor="isInvalid">isInvalid:</FormLabel>
      <Switch id="isInvalid" isInvalid />

      <FormLabel htmlFor="isReadOnly">isReadOnly:</FormLabel>
      <Switch id="isReadOnly" isReadOnly />

      <FormLabel htmlFor="isRequired">isRequired:</FormLabel>
      <Switch id="isRequired" isRequired />
    </FormControl>
  );
};
