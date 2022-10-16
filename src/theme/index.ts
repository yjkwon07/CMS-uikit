import { extendTheme } from '@chakra-ui/react';

import Avatar from './components/Avatar';
import Badge from './components/Badge';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import Container from './components/Container';
import Divider from './components/Divider';
import Heading from './components/Heading';
import Input from './components/Input';
import Link from './components/Link';
import Modal from './components/Modal';
import Select from './components/Select';
import Table from './components/Table';
import Tabs from './components/Tabs';
import { foundations } from './foundations';
import global from './global';
import layerStyles from './layerStyles';

const overrides = {
  styles: {
    global,
  },
  layerStyles,
  ...foundations,
  components: {
    Avatar,
    Badge,
    Button,
    Checkbox,
    Container,
    Divider,
    Heading,
    Input,
    Link,
    Modal,
    Select,
    Table,
    Tabs,
  },
};

export default extendTheme(overrides) as Record<string, string>;
