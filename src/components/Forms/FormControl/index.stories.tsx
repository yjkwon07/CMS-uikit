import { ChangeEvent, useState } from 'react';

import { CheckIcon } from '@chakra-ui/icons';
import {
  Box,
  Center,
  Checkbox,
  CheckboxGroup,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  ThemeTypings,
  useTheme,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

export default {
  title: 'Forms/FormControl',
  component: FormControl,
  argTypes: {},
};

export const Default = () => {
  return (
    <FormControl>
      <FormLabel>Email address</FormLabel>
      <Input type="email" />
      <FormHelperText>We&apos;ll never share your email.</FormHelperText>
    </FormControl>
  );
};

export const SizeVariant = () => {
  const theme = useTheme();

  const formControlProps = theme.components.Form;
  const VARIANT_LIST = Object.keys(
    formControlProps?.variants || {},
  ) as ThemeTypings['components']['Form']['variants'][];
  const SIZE_LIST = Object.keys(formControlProps?.sizes || {}) as ThemeTypings['components']['Form']['sizes'][];

  return (
    <Stack divider={<Divider />} spacing={3}>
      {VARIANT_LIST.length &&
        VARIANT_LIST.map((variant) => (
          <Box key={variant}>
            <Heading mb="16px">{(variant as string).toUpperCase()}</Heading>
            {SIZE_LIST.map((size) => (
              <FormControl key={size} size={size} variant={variant}>
                <FormLabel>{(size as string).toUpperCase()}</FormLabel>
                <Input type="email" />
                <FormHelperText>We&apos;ll never share your email.</FormHelperText>
              </FormControl>
            ))}
            <FormControl isDisabled>
              <FormLabel>Disabled</FormLabel>
              <Input type="email" />
              <FormHelperText>Disabled</FormHelperText>
            </FormControl>
          </Box>
        ))}
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
            <FormControl colorScheme={colorScheme}>
              <FormLabel>{colorScheme.charAt(0).toUpperCase() + colorScheme.slice(1)}</FormLabel>
              <Input type="email" />
              <FormHelperText>{colorScheme.charAt(0).toUpperCase() + colorScheme.slice(1)}</FormHelperText>
            </FormControl>
            <FormControl colorScheme={colorScheme} isDisabled>
              <FormLabel>Disabled</FormLabel>
              <Input type="email" />
              <FormHelperText>Disabled</FormHelperText>
            </FormControl>
          </Flex>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export const RadioOrCheckboxGroup = () => {
  return (
    <VStack>
      <FormControl as="fieldset">
        <FormLabel as="legend">Favorite Naruto Character</FormLabel>
        <RadioGroup defaultValue="Itachi">
          <HStack spacing="24px">
            <Radio value="Sasuke">Sasuke</Radio>
            <Radio value="Nagato">Nagato</Radio>
            <Radio value="Itachi">Itachi</Radio>
            <Radio value="Sage of the six Paths">Sage of the six Paths</Radio>
          </HStack>
        </RadioGroup>
        <FormHelperText>Select only if you&apos;re a fan.</FormHelperText>
      </FormControl>
      <FormControl as="fieldset">
        <FormLabel as="legend">Favorite Naruto Character</FormLabel>
        <CheckboxGroup colorScheme="green" defaultValue={['naruto', 'kakashi']}>
          <Stack>
            <Checkbox value="naruto">Naruto</Checkbox>
            <Checkbox value="sasuke">Sasuke</Checkbox>
            <Checkbox value="kakashi">Kakashi</Checkbox>
          </Stack>
        </CheckboxGroup>
        <FormHelperText>Select if you&apos;re a fan.</FormHelperText>
      </FormControl>
    </VStack>
  );
};

export const ErrorMessage = () => {
  const [input, setInput] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value);

  const isError = input === '';

  return (
    <FormControl isInvalid={isError}>
      <FormLabel>Email</FormLabel>
      <Input onChange={handleInputChange} type="email" value={input} />
      {!isError ? (
        <FormHelperText>Enter the email you&apos;d like to receive the newsletter on.</FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </FormControl>
  );
};

export const FieldRequired = () => {
  return (
    <VStack>
      <FormControl isRequired>
        <FormLabel>First name</FormLabel>
        <Input placeholder="First name" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel
          requiredIndicator={
            <Center display="inline-flex" ml="3">
              <CheckIcon color="green.300" />
            </Center>
          }
        >
          Last name
        </FormLabel>
        <Input placeholder="First name" />
      </FormControl>
    </VStack>
  );
};

export const WithSelect = () => {
  return (
    <FormControl>
      <FormLabel>Country</FormLabel>
      <Select placeholder="Select country">
        <option>United Arab Emirates</option>
        <option>Nigeria</option>
      </Select>
    </FormControl>
  );
};

export const WithNumberInput = () => {
  return (
    <FormControl>
      <FormLabel>Amount</FormLabel>
      <NumberInput max={50} min={10}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
};
