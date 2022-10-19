import { useState } from 'react';

import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
import {
  Box,
  ButtonGroup,
  Divider,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  Flex,
  Heading,
  IconButton,
  Input,
  Stack,
  ThemeTypings,
  Tooltip,
  useColorModeValue,
  useEditableControls,
  useTheme,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

export default {
  title: 'Forms/Editable',
  component: Editable,
  argTypes: {},
};

export const Default = () => {
  return (
    <Editable defaultValue="Take some chakra">
      <EditablePreview />
      <EditableInput />
    </Editable>
  );
};

export const SizeVariant = () => {
  const theme = useTheme();

  const editableProps = theme.components.Editable;
  const VARIANT_LIST = Object.keys(editableProps.variants) as ThemeTypings['components']['Editable']['variants'][];
  const SIZE_LIST = Object.keys(editableProps.sizes) as ThemeTypings['components']['Editable']['sizes'][];

  return (
    <Stack divider={<Divider />} spacing={3}>
      {VARIANT_LIST.length &&
        VARIANT_LIST.map((variant) => (
          <Box key={variant}>
            <Heading mb="16px">{(variant as string).toUpperCase()}</Heading>
            {SIZE_LIST.map((size) => (
              <Editable key={size} defaultValue={(size as string).toUpperCase()} size={size} variant={variant}>
                <EditablePreview />
                <EditableInput />
              </Editable>
            ))}
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
            <Editable
              colorScheme={colorScheme}
              defaultValue={colorScheme.charAt(0).toUpperCase() + colorScheme.slice(1)}
            >
              <EditablePreview />
              <EditableInput />
            </Editable>
          </Flex>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export const WithTextarea = () => {
  return (
    <Editable defaultValue="Take some chakra">
      <EditablePreview />
      <EditableTextarea />
    </Editable>
  );
};

const EditableControls = () => {
  const { isEditing, getSubmitButtonProps, getCancelButtonProps, getEditButtonProps } = useEditableControls();

  return isEditing ? (
    <ButtonGroup justifyContent="center" size="sm">
      <IconButton aria-label="ok" icon={<CheckIcon />} {...getSubmitButtonProps()} />
      <IconButton aria-label="cancel" icon={<CloseIcon />} {...getCancelButtonProps()} />
    </ButtonGroup>
  ) : (
    <Flex justify="center">
      <IconButton aria-label="edit" icon={<EditIcon />} size="sm" {...getEditButtonProps()} />
    </Flex>
  );
};

export const CustomInputAndControls = () => {
  const [value, setValue] = useState('editable ⚡️');

  return (
    <Editable fontSize="2xl" textAlign="center" isPreviewFocusable={false} onChange={setValue} value={value}>
      <EditablePreview />
      {/* Here is the custom input */}
      <Input as={EditableInput} />
      <EditableControls />
    </Editable>
  );
};

const AtlaskitEditableControls = () => {
  const { isEditing, getSubmitButtonProps, getCancelButtonProps } = useEditableControls();

  return isEditing ? (
    <ButtonGroup justifyContent="end" w="full" mt={2} size="sm" spacing={2}>
      <IconButton aria-label="ok" icon={<CheckIcon />} {...getSubmitButtonProps()} />
      <IconButton aria-label="cancel" icon={<CloseIcon boxSize={3} />} {...getCancelButtonProps()} />
    </ButtonGroup>
  ) : null;
};

export const AtlaskitInputAndControls = () => {
  return (
    <Editable defaultValue="Rasengan ⚡️" isPreviewFocusable selectAllOnFocus={false}>
      <Tooltip label="Click to edit">
        <EditablePreview
          px={4}
          py={2}
          _hover={{
            cursor: 'pointer',
            background: useColorModeValue('gray.100', 'gray.700'),
          }}
        />
      </Tooltip>
      <Input as={EditableInput} px={4} py={2} />
      <AtlaskitEditableControls />
    </Editable>
  );
};
