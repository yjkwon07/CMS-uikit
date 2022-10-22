import { Alert, AlertIcon, Kbd, List, ListItem } from '@chakra-ui/react';

export default {
  title: 'DataDisplay/Kbd',
  component: Kbd,
  argTypes: {},
};

export const Default = () => {
  return (
    <>
      <Alert status="info">
        <AlertIcon />
        <List>
          <ListItem>All single letters A-Z are uppercase.</ListItem>
          <ListItem>For non-letter keys such as enter, esc and shift, stick to lowercase.</ListItem>
          <ListItem>Use the arrow symbol as opposed to spelling things out.</ListItem>
        </List>
      </Alert>
      <span>
        <Kbd>shift</Kbd> + <Kbd>H</Kbd>
      </span>
    </>
  );
};
