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
import blur from './foundations/blur';
import borders from './foundations/borders';
import breakpoints from './foundations/breakpoints';
import colors from './foundations/colors';
import radii from './foundations/radii';
import shadows from './foundations/shadows';
import sizes from './foundations/sizes';
import space from './foundations/space';
import { fontSizes, fontWeights, fonts, letterSpacings, lineHeights } from './foundations/typography';
import zIndices from './foundations/zIndices';
import global from './global';
import layerStyles from './layerStyles';

const overrides = {
  styles: {
    global,
  },
  breakpoints,
  zIndices,
  radii,
  blur,
  colors,
  layerStyles,
  fontSizes,
  fontWeights,
  fonts,
  letterSpacings,
  lineHeights,
  sizes,
  shadows,
  space,
  borders,
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
