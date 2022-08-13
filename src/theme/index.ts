import { extendTheme } from '@chakra-ui/react';
import type { ChakraTheme } from '@chakra-ui/theme/';

import Avatar from './components/Avatar';
import Badge from './components/Badge';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import Container from './components/Container';
import Divider from './components/Divider';
import { H1, H2, H3 } from './components/Heading';
import Input from './components/Input';
import Link from './components/Link';
import Modal from './components/Modal';
import Select from './components/Select';
import Table from './components/Table';
import Tabs from './components/Tabs';
import VStack from './components/VStack';
import colors from './foundations/colors';
import { breakpoints, BreakPointsObject, sizes } from './foundations/sizes';
import global from './global';
import layerStyles from './layerStyles';

const overrides: Partial<Omit<ChakraTheme, 'breakpoints'>> & {
  breakpoints: BreakPointsObject;
} = {
  shadows: {
    outline: `0 0 0 1px brand`,
    md: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.1)',
  },
  layerStyles,
  colors,
  styles: {
    global,
  },
  breakpoints,
  sizes,
  components: {
    Container,
    Link,
    H1,
    H2,
    H3,
    Button,
    Input,
    Checkbox,
    Select,
    Badge,
    Divider,
    VStack,
    Avatar,
    Tabs,
    Table,
    Modal,
  },
};

export default extendTheme(overrides);
