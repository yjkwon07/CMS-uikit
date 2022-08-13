/* eslint-disable react/function-component-definition */
import { FC } from 'react';

import { Box, Button, Heading, ThemeTypings, useTheme, VStack } from '@chakra-ui/react';

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {},
};

export const Default: FC = () => {
  const theme = useTheme();

  const buttonProps = theme.components.Button;
  const VARIANT = Object.keys(buttonProps.variants) as ThemeTypings['components']['Button']['variants'][];
  const SIZE = Object.keys(buttonProps.sizes) as ThemeTypings['components']['Button']['sizes'][];

  return (
    <VStack align="stretch" spacing={10}>
      {Object.values(VARIANT).map((variant) => (
        <Box key={variant}>
          <Heading mb="16px">{variant.toUpperCase()}</Heading>
          {Object.values(SIZE).map((size) => (
            <Button key={size} mr="10px" size={size} variant={variant}>
              {size.toUpperCase()} Button
            </Button>
          ))}
          <Button as="a" disabled size="xs" variant={variant}>
            Disabled
          </Button>
        </Box>
      ))}
    </VStack>
  );
};
