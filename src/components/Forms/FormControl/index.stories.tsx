import { ChangeEvent, useState } from 'react';

import { CheckIcon } from '@chakra-ui/icons';
import {
  Center,
  Checkbox,
  CheckboxGroup,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
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
  VStack,
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
