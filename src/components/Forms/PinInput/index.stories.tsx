import {
  Box,
  Divider,
  Heading,
  HStack,
  PinInput,
  PinInputField,
  Stack,
  Text,
  ThemeTypings,
  useTheme,
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
