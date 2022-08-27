import {
  Box,
  Divider,
  Flex,
  Heading,
  Icon,
  IconButton,
  Stack,
  ThemeTypings,
  useTheme,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { FaSearch as FaSearchIcon } from 'react-icons/fa';
import { BrowserRouter, Link } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';

export default {
  title: 'Forms/IconButton',
  component: IconButton,
  argTypes: {},
};

export const Default = () => {
  return <IconButton aria-label="Search database" icon={<Icon as={FaSearchIcon} />} />;
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
          <Box mb="2">
            {SIZE_LIST.map((size) => (
              <IconButton
                key={size}
                mr="10px"
                aria-label="Search database"
                icon={<Icon as={FaSearchIcon} />}
                size={size}
                variant={variant}
              />
            ))}
            <IconButton
              aria-label="Search database"
              disabled
              icon={<Icon as={FaSearchIcon} />}
              size="xs"
              variant={variant}
            />
          </Box>
          <Box>
            {SIZE_LIST.map((size) => (
              <IconButton
                key={size}
                mr="10px"
                aria-label="Search database"
                icon={<Icon as={FaSearchIcon} />}
                isRound
                size={size}
                variant={variant}
              />
            ))}
            <IconButton
              aria-label="Search database"
              disabled
              icon={<Icon as={FaSearchIcon} />}
              isRound
              size="xs"
              variant={variant}
            />
          </Box>
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
            <IconButton
              aria-label="Search database"
              colorScheme={colorScheme}
              icon={<Icon as={FaSearchIcon} />}
              size="sm"
            />
            <IconButton
              aria-label="Search database"
              colorScheme={colorScheme}
              disabled
              icon={<Icon as={FaSearchIcon} />}
              size="xs"
            />
          </Flex>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export const Loading = () => {
  return (
    <Flex direction="column" rowGap={10}>
      <Flex columnGap={10}>
        <IconButton aria-label="Search database" icon={<Icon as={FaSearchIcon} />} isLoading />
        <IconButton
          aria-label="Search database"
          icon={<Icon as={FaSearchIcon} />}
          isLoading
          spinner={<BeatLoader size={8} color="white" />}
        />
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
          <Box mb="2">
            {SIZE_LIST.map((size) => (
              <IconButton
                key={size}
                as="a"
                mr="10px"
                aria-label="Search database"
                href="https://www.naver.com"
                icon={<Icon as={FaSearchIcon} />}
                size={size}
                variant={variant}
              >
                dd
              </IconButton>
            ))}
            <IconButton
              as="a"
              aria-label="Search database"
              disabled
              href="https://www.naver.com"
              icon={<Icon as={FaSearchIcon} />}
              size="xs"
              variant={variant}
            />
          </Box>
          <Box>
            {SIZE_LIST.map((size) => (
              <IconButton
                key={size}
                as="a"
                mr="10px"
                aria-label="Search database"
                href="https://www.naver.com"
                icon={<Icon as={FaSearchIcon} />}
                isRound
                size={size}
                variant={variant}
              />
            ))}
            <IconButton
              as="a"
              aria-label="Search database"
              disabled
              href="https://www.naver.com"
              icon={<Icon as={FaSearchIcon} />}
              isRound
              size="xs"
              variant={variant}
            />
          </Box>
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
          <IconButton
            as={Link}
            aria-label="Search database"
            icon={<Icon as={FaSearchIcon} />}
            to="/"
            variant="outline"
          />
        </Box>
      </BrowserRouter>
    </Flex>
  );
};
