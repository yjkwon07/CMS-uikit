import { useState } from 'react';

import {
  Button,
  Divider,
  Flex,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  ThemeTypings,
  useNumberInput,
  useTheme,
} from '@chakra-ui/react';

export default {
  title: 'Forms/NumberInput',
  component: NumberInput,
  argTypes: {},
};

export const Default = () => {
  return (
    <NumberInput>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export const MinMax = () => {
  return (
    <NumberInput defaultValue={15} max={20} min={10}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export const StepSize = () => {
  return (
    <NumberInput defaultValue={15} max={30} min={10} step={5}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export const AdjustingThePrecision = () => {
  return (
    <NumberInput defaultValue={15} precision={2} step={0.2}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export const ClampValueWhenUserBlurs = () => {
  return (
    <NumberInput clampValueOnBlur={false} defaultValue={15} max={30}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export const AllowingOutOfRangeValues = () => {
  return (
    <NumberInput clampValueOnBlur={false} defaultValue={15} keepWithinRange={false} max={10}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export const FormattingAndParsingTheValue = () => {
  const format = (val: string | number) => `$${val}`;
  const parse = (val: string) => val.replace(/^\$/, '');

  const [value, setValue] = useState('1.53');

  return (
    <NumberInput max={50} onChange={(valueString) => setValue(parse(valueString))} value={format(value)}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export const Size = () => {
  const theme = useTheme();

  const numberInputProps = theme.components.NumberInput;
  const SIZE_LIST = Object.keys(numberInputProps.sizes) as ThemeTypings['components']['NumberInput']['sizes'][];

  return (
    <Stack divider={<Divider />} spacing={3}>
      {SIZE_LIST.map((size) => (
        <NumberInput key={size} maxW={16} defaultValue={15} min={10} size={size}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      ))}
    </Stack>
  );
};

export const ChangingTheStyles = () => {
  return (
    <NumberInput defaultValue={15} min={10} size="sm">
      <NumberInputField _focus={{ borderColor: 'red.200' }} />
      <NumberInputStepper>
        <NumberIncrementStepper bg="green.200" _active={{ bg: 'green.300' }}>
          +
        </NumberIncrementStepper>
        <NumberDecrementStepper bg="pink.200" _active={{ bg: 'pink.300' }}>
          -
        </NumberDecrementStepper>
      </NumberInputStepper>
    </NumberInput>
  );
};

export const CombiningItWithASlider = () => {
  const [value, setValue] = useState(0);

  return (
    <Flex>
      <NumberInput
        maxW="100px"
        mr="2rem"
        onChange={(_, valueAsNumber: number) => setValue(valueAsNumber)}
        value={value}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Slider
        flex="1"
        focusThumbOnChange={false}
        onChange={(valueAsNumber: number) => setValue(valueAsNumber)}
        value={value}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb boxSize="32px" fontSize="sm">
          {value}
        </SliderThumb>
      </Slider>
    </Flex>
  );
};

export const CreateAMobileSpinner = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    step: 0.01,
    defaultValue: 1.53,
    min: 1,
    max: 6,
    precision: 2,
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack maxW="320px">
      <Button {...inc}>+</Button>
      <Input {...input} />
      <Button {...dec}>-</Button>
    </HStack>
  );
};

export const IncrementValueUsingMouseWheel = () => {
  return (
    <NumberInput allowMouseWheel>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};
