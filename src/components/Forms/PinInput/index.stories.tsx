import { Box, Divider, HStack, PinInput, PinInputField, Stack, ThemeTypings, useTheme } from '@chakra-ui/react';

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

export const Size = () => {
  const theme = useTheme();

  const numberInputProps = theme.components.NumberInput;
  const SIZE_LIST = Object.keys(numberInputProps.sizes) as ThemeTypings['components']['NumberInput']['sizes'][];

  return (
    <Stack divider={<Divider />} spacing={3}>
      {SIZE_LIST.map((size) => (
        <Box key={size}>
          <PinInput colorScheme="red" placeholder={size.toUpperCase()} size={size}>
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        </Box>
      ))}
    </Stack>
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
