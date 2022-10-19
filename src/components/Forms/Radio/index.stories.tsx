import { PropsWithChildren, useState } from 'react';

import {
  Alert,
  AlertIcon,
  Box,
  Divider,
  Heading,
  HStack,
  Radio,
  RadioGroup,
  Stack,
  ThemeTypings,
  useRadio,
  useRadioGroup,
  useTheme,
} from '@chakra-ui/react';

export default {
  title: 'Forms/Radio',
  component: Radio,
  argTypes: {},
};

export const Default = () => {
  const [value, setValue] = useState('1');
  return (
    <RadioGroup onChange={setValue} value={value}>
      <Stack direction="row">
        <Radio value="1">First</Radio>
        <Radio value="2">Second</Radio>
        <Radio value="3">Third</Radio>
      </Stack>
    </RadioGroup>
  );
};

export const SizeVariant = () => {
  const theme = useTheme();

  const radioProps = theme.components.Radio;
  const VARIANT_LIST = Object.keys(radioProps.variants) as ThemeTypings['components']['Radio']['variants'][];
  const SIZE_LIST = Object.keys(radioProps.sizes).sort().reverse() as ThemeTypings['components']['Radio']['sizes'][];

  return (
    <Stack divider={<Divider />} spacing={3}>
      {VARIANT_LIST.length ? (
        VARIANT_LIST.map((variant) => (
          <Box key={variant}>
            <Heading mb="16px">{(variant as string).toUpperCase()}</Heading>
            {SIZE_LIST.map((size) => (
              <Radio key={size} name="1" size={size} variant={variant}>
                {size.toUpperCase()}
              </Radio>
            ))}
            <Radio disabled size="sm" variant={variant}>
              DISABLED
            </Radio>
          </Box>
        ))
      ) : (
        <HStack spacing={3}>
          {SIZE_LIST.map((size) => (
            <Radio key={size} name="1" size={size}>
              {size.toUpperCase()}
            </Radio>
          ))}
        </HStack>
      )}
    </Stack>
  );
};

export const ColorScheme = () => {
  return (
    <RadioGroup defaultValue="2">
      <Stack direction="row" spacing={5}>
        <Radio colorScheme="red" value="1">
          Radio
        </Radio>
        <Radio colorScheme="green" value="2">
          Radio
        </Radio>
      </Stack>
    </RadioGroup>
  );
};

export const Disabled = () => {
  return (
    <RadioGroup defaultValue="1">
      <Stack>
        <Radio isDisabled value="1">
          Checked
        </Radio>
        <Radio value="2">Unchecked</Radio>
        <Radio value="3">Unchecked</Radio>
      </Stack>
    </RadioGroup>
  );
};

export const Invalid = () => {
  return <Radio isInvalid>Radio</Radio>;
};

const RadioCard = ({ children, ...props }: PropsWithChildren<any>) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        px={5}
        py={3}
        borderWidth="1px"
        borderRadius="md"
        shadow="md"
        _focus={{
          boxShadow: 'outline',
        }}
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        cursor="pointer"
      >
        {children}
      </Box>
    </Box>
  );
};

export const CustomRadioButton = () => {
  const options = ['react', 'vue', 'svelte'];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'framework',
    defaultValue: 'react',
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <>
      <Alert status="info">
        <AlertIcon />
        Please be aware that the example below should only be used if you really need a radio button for data collection
        purposes. If you want to toggle between different content on activation of a button use the Tabs component.
      </Alert>
      <HStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
      </HStack>
    </>
  );
};

export const NoteAboutNameProp = () => {
  return (
    <>
      <Alert status="info">
        <AlertIcon />
        We recommend passing the name prop to the RadioGroup component, instead of passing it to each Radio component.
        By default, the name prop of the RadioGroup takes precedence.
      </Alert>
      <RadioGroup name="form-name">
        <Radio>Radio 1</Radio>
        <Radio>Radio 2</Radio>
      </RadioGroup>
    </>
  );
};
