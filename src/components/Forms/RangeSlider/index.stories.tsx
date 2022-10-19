import {
  Box,
  Divider,
  Heading,
  HStack,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Stack,
  Text,
  ThemeTypings,
  useTheme,
} from '@chakra-ui/react';
import { MdGraphicEq } from 'react-icons/md';

export default {
  title: 'Forms/RangeSlider',
  component: RangeSlider,
  argTypes: {},
};

export const Default = () => {
  return (
    <RangeSlider defaultValue={[10, 30]}>
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </RangeSlider>
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
                  <RangeSlider defaultValue={[10, 30]} size={size} variant={variant}>
                    <RangeSliderTrack>
                      <RangeSliderFilledTrack />
                    </RangeSliderTrack>
                    <RangeSliderThumb index={0} />
                    <RangeSliderThumb index={1} />
                  </RangeSlider>
                  <Text>{size.toUpperCase()}</Text>
                </HStack>
              ))}
              <HStack>
                <RangeSlider defaultValue={[10, 30]} isDisabled size="sm" variant={variant}>
                  <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                  </RangeSliderTrack>
                  <RangeSliderThumb index={0} />
                  <RangeSliderThumb index={1} />
                </RangeSlider>
                <Text>Disabled</Text>
              </HStack>
            </Stack>
          </Box>
        ))
      ) : (
        <Stack spacing={3}>
          {SIZE_LIST.map((size) => (
            <HStack key={size}>
              <RangeSlider defaultValue={[10, 30]} isDisabled size={size}>
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
              <Text>{size.toUpperCase()}</Text>
            </HStack>
          ))}
        </Stack>
      )}
    </Stack>
  );
};

export const ColorScheme = () => {
  return (
    <RangeSlider colorScheme="pink" defaultValue={[10, 30]}>
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </RangeSlider>
  );
};

export const Orientation = () => {
  return (
    <RangeSlider minH="32" colorScheme="pink" defaultValue={[10, 30]} orientation="vertical">
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </RangeSlider>
  );
};

export const Customizing = () => {
  return (
    <RangeSlider defaultValue={[30, 80]}>
      <RangeSliderTrack bg="red.100">
        <RangeSliderFilledTrack bg="tomato" />
      </RangeSliderTrack>
      <RangeSliderThumb boxSize={6} index={0}>
        <Box as={MdGraphicEq} color="tomato" />
      </RangeSliderThumb>
      <RangeSliderThumb boxSize={6} index={1}>
        <Box as={MdGraphicEq} color="tomato" />
      </RangeSliderThumb>
    </RangeSlider>
  );
};

export const Discrete = () => {
  return (
    <RangeSlider defaultValue={[120, 240]} max={300} min={0} step={30}>
      <RangeSliderTrack bg="red.100">
        <RangeSliderFilledTrack bg="tomato" />
      </RangeSliderTrack>
      <RangeSliderThumb boxSize={6} index={0} />
      <RangeSliderThumb boxSize={6} index={1} />
    </RangeSlider>
  );
};

export const GettingTheFinalValueWhenDragging = () => {
  return (
    <RangeSlider onChangeEnd={(val) => console.log(val)}>
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb index={0} />
      <RangeSliderThumb index={1} />
    </RangeSlider>
  );
};
