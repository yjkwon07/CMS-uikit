import { useState } from 'react';

import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';
import {
  ButtonGroup,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
  Flex,
  IconButton,
  Input,
  Tooltip,
  useColorModeValue,
  useEditableControls,
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
