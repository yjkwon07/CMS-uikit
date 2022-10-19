import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Select,
  Stack,
  Text,
  ThemeTypings,
  useTheme,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { MdGraphicEq } from 'react-icons/md';

export default {
  title: 'Forms/Select',
  component: Select,
  argTypes: {},
};

export const Default = () => {
  return (
    <Select placeholder="Select option">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
  );
};

export const SizeVariant = () => {
  const theme = useTheme();

  const selectProps = theme.components.Select;
  const VARIANT_LIST = Object.keys(selectProps.variants || {}) as ThemeTypings['components']['Select']['variants'][];
  const SIZE_LIST = Object.keys(selectProps.sizes || {}) as ThemeTypings['components']['Select']['sizes'][];

  return (
    <Stack divider={<Divider />} spacing={3}>
      {VARIANT_LIST.length ? (
        VARIANT_LIST.map((variant) => (
          <Box key={variant}>
            <Heading mb="16px">{(variant as string).toUpperCase()}</Heading>
            <Stack spacing={3}>
              {SIZE_LIST.map((size) => (
                <HStack key={size}>
                  <Select placeholder="Select option" size={size} variant={variant}>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                  <Text>{size.toUpperCase()}</Text>
                </HStack>
              ))}
              <HStack>
                <Select isDisabled placeholder="Select option" size="xs" variant={variant}>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                <Text>Disabled</Text>
              </HStack>
            </Stack>
          </Box>
        ))
      ) : (
        <Stack spacing={3}>
          {SIZE_LIST.map((size) => (
            <HStack key={size}>
              <Select placeholder="Select option" size={size}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
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
              <Select colorScheme={colorScheme} placeholder="Select option" size="sm">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <Text>{colorScheme.charAt(0).toUpperCase() + colorScheme.slice(1)}</Text>
            </HStack>
            <HStack>
              <Select colorScheme={colorScheme} isDisabled placeholder="Select option" size="xs">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
              <Text>Disabled</Text>
            </HStack>
          </Flex>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export const Icon = () => {
  return <Select icon={<MdGraphicEq />} placeholder="Woohoo! A new icon" />;
};

export const Overriding = () => {
  return <Select color="white" bg="tomato" borderColor="tomato" placeholder="Woohoo! A new background color!" />;
};
