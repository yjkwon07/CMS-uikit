import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Stack,
  ThemeTypings,
  useTheme,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { FaArrowRight as FaArrowRightIcon } from 'react-icons/fa';
import { MdOutlineEmail as MdOutlineEmailIcon } from 'react-icons/md';
import { BrowserRouter, Link } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

export default {
  title: 'Forms/Button',
  component: Button,
  argTypes: {},
};

export const Default = () => {
  return <Button>Button</Button>;
};

export const SizeVariant = () => {
  const theme = useTheme();

  const buttonProps = theme.components.Button;
  const VARIANT_LIST = Object.keys(buttonProps.variants) as ThemeTypings['components']['Button']['variants'][];
  const SIZE_LIST = Object.keys(buttonProps.sizes) as ThemeTypings['components']['Button']['sizes'][];

  return (
    <Stack divider={<Divider />} spacing={3}>
      {VARIANT_LIST.map((variant) => (
        <Box key={variant}>
          <Heading mb="16px">{variant.toUpperCase()}</Heading>
          {SIZE_LIST.map((size) => (
            <Button key={size} mr="10px" size={size} variant={variant}>
              {size.toUpperCase()}
            </Button>
          ))}
          <Button disabled size="xs" variant={variant}>
            DISABLED
          </Button>
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
            <Button colorScheme={colorScheme} size="sm">
              {colorScheme.charAt(0).toUpperCase() + colorScheme.slice(1)}
            </Button>
            <Button colorScheme={colorScheme} disabled size="xs">
              Disabled
            </Button>
          </Flex>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export const WidthIcons = () => {
  return (
    <Flex direction="column" rowGap={10}>
      <Flex columnGap={10}>
        <Button fontSize={{ base: 'xx-small', xs: 'xs', sm: 'md' }} leftIcon={<Icon as={MdOutlineEmailIcon} />}>
          Button
        </Button>
        <Button rightIcon={<Icon as={FaArrowRightIcon} />}>Button</Button>
        <Button leftIcon={<Icon as={MdOutlineEmailIcon} />} rightIcon={<Icon as={FaArrowRightIcon} />}>
          Button
        </Button>
      </Flex>
    </Flex>
  );
};

export const Loading = () => {
  return (
    <Flex direction="column" rowGap={10}>
      <Flex columnGap={10}>
        <Button isLoading>Search</Button>
        <Button isLoading loadingText="Submitting">
          Search
        </Button>
        <Button isLoading spinner={<BeatLoader size={8} color="white" />}>
          Click me
        </Button>
        <Button isLoading loadingText="Loading" spinnerPlacement="start">
          Submit
        </Button>
        <Button isLoading loadingText="Loading" spinnerPlacement="end">
          Continue
        </Button>
      </Flex>
    </Flex>
  );
};

export const Anchors = () => {
  const theme = useTheme();

  const buttonProps = theme.components.Button;
  const VARIANT_LIST = Object.keys(buttonProps.variants) as ThemeTypings['components']['Button']['variants'][];
  const SIZE_LIST = Object.keys(buttonProps.sizes) as ThemeTypings['components']['Button']['sizes'][];

  return (
    <Stack divider={<Divider />} spacing={3}>
      {VARIANT_LIST.map((variant) => (
        <Box key={variant}>
          <Heading mb="16px">{variant.toUpperCase()}</Heading>
          {SIZE_LIST.map((size) => (
            <Button key={size} as="a" mr="10px" href="https://www.naver.com" size={size} variant={variant}>
              {size.toUpperCase()}
            </Button>
          ))}
          <Button as="a" disabled size="xs" variant={variant}>
            DISABLED
          </Button>
        </Box>
      ))}
    </Stack>
  );
};

export const BrowserLink = () => {
  return (
    <Flex direction="column" rowGap={10}>
      <BrowserRouter basename="">
        <Box>
          <Button as={Link} to="/" variant="outline">
            As an React Router link
          </Button>
        </Box>
      </BrowserRouter>
    </Flex>
  );
};
