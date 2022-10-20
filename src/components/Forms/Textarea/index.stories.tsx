import { ChangeEvent, useState } from 'react';

import {
  Box,
  Divider,
  Flex,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Textarea,
  ThemeTypings,
  useTheme,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

export default {
  title: 'Forms/Textarea',
  component: Textarea,
  argTypes: {},
};

export const Default = () => {
  return <Textarea placeholder="Here is a sample placeholder" />;
};

export const SizeVariant = () => {
  const theme = useTheme();

  const textareaProps = theme.components.Textarea;
  const VARIANT_LIST = Object.keys(
    textareaProps.variants || {},
  ) as ThemeTypings['components']['Textarea']['variants'][];
  const SIZE_LIST = Object.keys(textareaProps.sizes || {}) as ThemeTypings['components']['Textarea']['sizes'][];

  return (
    <Stack divider={<Divider />} spacing={3}>
      {VARIANT_LIST.length ? (
        VARIANT_LIST.map((variant) => (
          <Box key={variant}>
            <Heading mb="16px">{(variant as string).toUpperCase()}</Heading>
            <Stack spacing={3}>
              {SIZE_LIST.map((size) => (
                <Textarea key={size} placeholder={size.toUpperCase()} size={size} variant={variant} />
              ))}
              <Textarea isDisabled placeholder="Disabled" size="sm" variant={variant} />
            </Stack>
          </Box>
        ))
      ) : (
        <Stack spacing={3}>
          {SIZE_LIST.map((size) => (
            <Textarea key={size} placeholder={size.toUpperCase()} size={size} />
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
            <Textarea
              colorScheme={colorScheme}
              placeholder={colorScheme.charAt(0).toUpperCase() + colorScheme.slice(1)}
              size="md"
            />
            <Textarea colorScheme={colorScheme} isDisabled placeholder="Disabled" size="sm" />
          </Flex>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export const Controlled = () => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
  };

  return (
    <>
      <Text mb="8px">Value: {value}</Text>
      <Textarea onChange={handleInputChange} placeholder="Here is a sample placeholder" size="sm" value={value} />
    </>
  );
};

export const Resize = () => {
  const [resize, setResize] = useState<'horizontal' | 'vertical' | 'none'>('horizontal');

  const handleResizeChange = (value: 'horizontal' | 'vertical' | 'none') => {
    setResize(value);
  };

  return (
    <>
      <RadioGroup mb={6} defaultValue={resize} onChange={handleResizeChange}>
        <Stack direction="row" spacing={5}>
          <Radio value="horizontal">Horizontal</Radio>
          <Radio value="vertical">Vertical</Radio>
          <Radio value="none">None</Radio>
        </Stack>
      </RadioGroup>

      <Textarea resize={resize} placeholder="Here is a sample placeholder" size="sm" />
    </>
  );
};

export const Invalid = () => {
  return <Textarea isInvalid placeholder="Here is a sample placeholder" />;
};
