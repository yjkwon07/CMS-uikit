import { extendTheme } from '@chakra-ui/react';

import Avatar from './components/Avatar';
import Badge from './components/Badge';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import Container from './components/Container';
import Divider from './components/Divider';
import Heading from './components/Heading';
import Highlight from './components/Highlight';
import Input from './components/Input';
import Link from './components/Link';
import Mark from './components/Mark';
import Modal from './components/Modal';
import Select from './components/Select';
import Table from './components/Table';
import Tabs from './components/Tabs';
import Text from './components/Text';
import VStack from './components/VStack';
import breakpoints from './foundations/breakpoints';
import colors from './foundations/colors';
import { sizes } from './foundations/sizes';
import { fontSizes, fontWeights, fonts, letterSpacings, lineHeights } from './foundations/typography';
import global from './global';
import layerStyles from './layerStyles';

const overrides = {
  shadows: {
    outline: `0 0 0 1px brand`,
    md: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.1)',
  },
  layerStyles,
  colors,
  fontSizes,
  fontWeights,
  fonts,
  letterSpacings,
  lineHeights,
  styles: {
    global,
  },
  breakpoints,
  sizes,
  components: {
    Container,
    Link,
    Heading,
    Highlight,
    Mark,
    Text,
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

export default extendTheme(overrides) as Record<string, string>;
