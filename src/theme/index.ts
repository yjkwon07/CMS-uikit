import { extendTheme } from '@chakra-ui/react';

import Avatar from './components/Avatar';
import Badge from './components/Badge';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import Code from './components/Code';
import Container from './components/Container';
import Divider from './components/Divider';
import Editable from './components/Editable';
import Heading from './components/Heading';
import Input from './components/Input';
import Kbd from './components/Kbd';
import Link from './components/Link';
import Modal from './components/Modal';
import NumberInput from './components/NumberInput';
import PinInput from './components/PinInput';
import Radio from './components/Radio';
import Select from './components/Select';
import Slider from './components/Slider';
import Switch from './components/Switch';
import Table from './components/Table';
import Tabs from './components/Tabs';
import Textarea from './components/Textarea';
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
    Code,
    Container,
    Divider,
    Editable,
    Heading,
    Input,
    Kbd,
    Link,
    Modal,
    NumberInput,
    PinInput,
    Radio,
    Select,
    Slider,
    Switch,
    Table,
    Tabs,
    Textarea,
  },
};

export default extendTheme(overrides) as Record<string, string>;
