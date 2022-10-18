import { ChangeEvent, useState } from 'react';

import { CheckIcon, PhoneIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Divider,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  Stack,
  Text,
  ThemeTypings,
  useTheme,
} from '@chakra-ui/react';

export default {
  title: 'Forms/Input',
  component: Input,
  argTypes: {},
};

export const Default = () => {
  return <Input placeholder="Basic usage" />;
};

export const SizeVariant = () => {
  const theme = useTheme();

  const inputProps = theme.components.Input;
  const VARIANT_LIST = Object.keys(inputProps.variants) as ThemeTypings['components']['Input']['variants'][];
  const SIZE_LIST = Object.keys(inputProps.sizes) as ThemeTypings['components']['Input']['sizes'][];

  return (
    <Stack divider={<Divider />} spacing={3}>
      {VARIANT_LIST.map((variant) => (
        <Box key={variant}>
          <Heading mb="16px">{variant.toUpperCase()}</Heading>
          {SIZE_LIST.map((size) => (
            <Input
              key={size}
              mb="10px"
              colorScheme="red"
              placeholder={size.toUpperCase()}
              size={size}
              variant={variant}
            />
          ))}
          <Input isDisabled placeholder="DISABLED" size="xs" variant={variant} />
        </Box>
      ))}
    </Stack>
  );
};

export const LeftAndRightAddons = () => {
  return (
    <Stack spacing={4}>
      <InputGroup>
        <InputLeftAddon>+234</InputLeftAddon>
        <Input placeholder="phone number" type="tel" />
      </InputGroup>

      {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
      <InputGroup size="sm">
        <InputLeftAddon>https://</InputLeftAddon>
        <Input placeholder="mysite" />
        <InputRightAddon>.com</InputRightAddon>
      </InputGroup>
    </Stack>
  );
};

export const AddElementsInsideInput = () => {
  return (
    <Stack spacing={4}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <PhoneIcon color="gray.300" />
        </InputLeftElement>
        <Input placeholder="Phone number" type="tel" />
      </InputGroup>

      <InputGroup>
        <InputLeftElement color="gray.300" fontSize="1.2em" pointerEvents="none">
          $
        </InputLeftElement>
        <Input placeholder="Enter amount" />
        <InputRightElement>
          <CheckIcon color="green.500" />
        </InputRightElement>
      </InputGroup>
    </Stack>
  );
};

export const PasswordInput = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input pr="4.5rem" placeholder="Enter password" type={show ? 'text' : 'password'} />
      <InputRightElement w="4.5rem">
        <Button h="1.75rem" onClick={handleClick} size="sm">
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export const ControlledInput = () => {
  const [value, setValue] = useState('');
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value);

  return (
    <>
      <Text mb="8px">Value: {value}</Text>
      <Input onChange={handleChange} placeholder="Here is a sample placeholder" size="sm" value={value} />
    </>
  );
};

export const ChangingFocusAndErrorBorderColors = () => {
  return (
    <Stack spacing={3}>
      <Input focusBorderColor="lime" placeholder="Here is a sample placeholder" />
      <Input focusBorderColor="pink.400" placeholder="Here is a sample placeholder" />
      <Input errorBorderColor="red.300" isInvalid placeholder="Here is a sample placeholder" />
      <Input errorBorderColor="crimson" isInvalid placeholder="Here is a sample placeholder" />
    </Stack>
  );
};

export const StylingPlaceholder = () => {
  return (
    <Stack spacing={3}>
      <Input placeholder="default placeholder" />
      <Input _placeholder={{ opacity: 1, color: 'gray.500' }} placeholder="custom placeholder" />
      <Input color="teal" _placeholder={{ color: 'inherit' }} placeholder="custom placeholder" />
      <Input color="tomato" _placeholder={{ opacity: 0.4, color: 'inherit' }} placeholder="custom placeholder" />
    </Stack>
  );
};

export const OtherThanText = () => {
  return <Input placeholder="Select Date and Time" size="md" type="datetime-local" />;
};
