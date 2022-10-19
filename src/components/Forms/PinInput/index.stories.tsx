import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  PinInput,
  PinInputField,
  Stack,
  Text,
  ThemeTypings,
  useTheme,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

export default {
  title: 'Forms/PinInput',
  component: PinInput,
  argTypes: {},
};

export const Default = () => {
  return (
    <HStack>
      <PinInput>
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </HStack>
  );
};

export const SizeVariant = () => {
  const theme = useTheme();

  const numberInputProps = theme.components.NumberInput;
  const VARIANT_LIST = Object.keys(
    numberInputProps.variants,
  ) as ThemeTypings['components']['NumberInput']['variants'][];
  const SIZE_LIST = Object.keys(numberInputProps.sizes) as ThemeTypings['components']['NumberInput']['sizes'][];

  return (
    <Stack divider={<Divider />} spacing={3}>
      {VARIANT_LIST.length ? (
        VARIANT_LIST.map((variant) => (
          <Box key={variant}>
            <Heading mb="16px">{(variant as string).toUpperCase()}</Heading>
            <Stack spacing={3}>
              {SIZE_LIST.map((size) => (
                <HStack key={size}>
                  <PinInput size={size} variant={variant}>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                  <Text>{size.toUpperCase()}</Text>
                </HStack>
              ))}
              <HStack>
                <PinInput isDisabled size="xs" variant={variant}>
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                </PinInput>
                <Text>Disabled</Text>
              </HStack>
            </Stack>
          </Box>
        ))
      ) : (
        <Stack spacing={3}>
          {SIZE_LIST.map((size) => (
            <HStack key={size}>
              <PinInput size={size}>
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
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
            align="center"
            justify="center"
            direction="column"
            rowGap={3}
            bgImage={colorScheme.includes('white') ? 'url("https://bit.ly/2Z4KKcF")' : undefined}
            bgPosition="center"
          >
            <HStack>
              <PinInput colorScheme={colorScheme} size="sm">
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
              <Text> {colorScheme.charAt(0).toUpperCase() + colorScheme.slice(1)}</Text>
            </HStack>
            <HStack>
              <PinInput colorScheme={colorScheme} isDisabled size="xs">
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
              <Text>Disabled</Text>
            </HStack>
          </Flex>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export const AllowingAlphanumericValues = () => {
  return (
    <HStack>
      <PinInput type="alphanumeric">
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </HStack>
  );
};

export const UsingFieldsAsAOneTimePassword = () => {
  return (
    <PinInput otp>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  );
};

export const AddElementsInsideInput = () => {
  return (
    <HStack>
      <PinInput mask type="alphanumeric">
        <PinInputField />
        <PinInputField />
        <PinInputField />
        <PinInputField />
      </PinInput>
    </HStack>
  );
};

export const AddingADefaultValue = () => {
  return (
    <PinInput defaultValue="234">
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  );
};

export const ChangingThePlaceholder = () => {
  return (
    <PinInput placeholder="🥳">
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  );
};

export const DisableFocusManagement = () => {
  return (
    <PinInput manageFocus={false}>
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  );
};

export const AutoFillAndCopyAndPaste = () => {
  return (
    <PinInput>
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  );
};
