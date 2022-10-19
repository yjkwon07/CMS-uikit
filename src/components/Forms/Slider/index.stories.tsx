import { useState } from 'react';

import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
  ThemeTypings,
  Tooltip,
  useTheme,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { MdGraphicEq } from 'react-icons/md';

export default {
  title: 'Forms/Slider',
  component: Slider,
  argTypes: {},
};

export const Default = () => {
  return (
    <Slider aria-label="slider-ex-1" defaultValue={30}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
};

export const SizeVariant = () => {
  const theme = useTheme();

  const sliderProps = theme.components.Slider;
  const VARIANT_LIST = Object.keys(sliderProps.variants || {}) as ThemeTypings['components']['Slider']['variants'][];
  const SIZE_LIST = Object.keys(sliderProps.sizes || {}) as ThemeTypings['components']['Slider']['sizes'][];

  return (
    <Stack divider={<Divider />} spacing={3}>
      {VARIANT_LIST.length ? (
        VARIANT_LIST.map((variant) => (
          <Box key={variant}>
            <Heading mb="16px">{(variant as string).toUpperCase()}</Heading>
            <Stack spacing={3}>
              {SIZE_LIST.map((size) => (
                <HStack key={size}>
                  <Slider defaultValue={30} size={size} variant={variant}>
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                  <Text>{size.toUpperCase()}</Text>
                </HStack>
              ))}
              <HStack>
                <Slider defaultValue={30} isDisabled size="sm" variant={variant}>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
                <Text>Disabled</Text>
              </HStack>
            </Stack>
          </Box>
        ))
      ) : (
        <Stack spacing={3}>
          {SIZE_LIST.map((size) => (
            <HStack key={size}>
              <Slider defaultValue={30} isDisabled size={size}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
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
            direction="column"
            rowGap={3}
            w="300px"
            bgImage={colorScheme.includes('white') ? 'url("https://bit.ly/2Z4KKcF")' : undefined}
            bgPosition="center"
          >
            <HStack>
              <Slider colorScheme={colorScheme} defaultValue={30} size="md">
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Text>{colorScheme.charAt(0).toUpperCase() + colorScheme.slice(1)}</Text>
            </HStack>
            <HStack>
              <Slider colorScheme={colorScheme} defaultValue={30} isDisabled size="sm">
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Text>Disabled</Text>
            </HStack>
          </Flex>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export const Orientation = () => {
  return (
    <Slider minH="32" aria-label="slider-ex-3" defaultValue={30} orientation="vertical">
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
};

export const Customizing = () => {
  return (
    <Slider aria-label="slider-ex-4" defaultValue={30}>
      <SliderTrack bg="red.100">
        <SliderFilledTrack bg="tomato" />
      </SliderTrack>
      <SliderThumb boxSize={6}>
        <Box as={MdGraphicEq} color="tomato" />
      </SliderThumb>
    </Slider>
  );
};

export const Discrete = () => {
  return (
    <Slider defaultValue={60} max={300} min={0} step={30}>
      <SliderTrack bg="red.100">
        <Box pos="relative" right={10} />
        <SliderFilledTrack bg="tomato" />
      </SliderTrack>
      <SliderThumb boxSize={6} />
    </Slider>
  );
};

export const CustomLabelsAndMarks = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  };

  return (
    <Box pt={6} pb={2}>
      <Slider aria-label="slider-ex-6" onChange={(val) => setSliderValue(val)}>
        <SliderMark value={25} {...labelStyles}>
          25%
        </SliderMark>
        <SliderMark value={50} {...labelStyles}>
          50%
        </SliderMark>
        <SliderMark value={75} {...labelStyles}>
          75%
        </SliderMark>
        <SliderMark w="12" mt="-10" ml="-5" color="white" textAlign="center" bg="blue.500" value={sliderValue}>
          {sliderValue}%
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
};

export const CustomLabelsAndMarksTooltip = () => {
  const [sliderValue, setSliderValue] = useState(5);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <Slider
      colorScheme="teal"
      defaultValue={5}
      id="slider"
      max={100}
      min={0}
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderMark mt="1" ml="-2.5" fontSize="sm" value={25}>
        25%
      </SliderMark>
      <SliderMark mt="1" ml="-2.5" fontSize="sm" value={50}>
        50%
      </SliderMark>
      <SliderMark mt="1" ml="-2.5" fontSize="sm" value={75}>
        75%
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip color="white" bg="teal.500" hasArrow isOpen={showTooltip} label={`${sliderValue}%`} placement="top">
        <SliderThumb />
      </Tooltip>
    </Slider>
  );
};

export const GettingTheFinalValueWhenDragging = () => {
  return (
    <Slider aria-label="slider-ex-5" onChangeEnd={(val) => console.log(val)}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
};

export const FocusThumbOnChange = () => {
  return (
    <Slider aria-label="slider-ex-5" focusThumbOnChange={false} value={30}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
};
