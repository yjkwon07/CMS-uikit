import { extendTheme } from '@chakra-ui/react';

import Avatar from './components/Avatar';
import Badge from './components/Badge';
import Box from './components/Box';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import Container from './components/Container';
import Divider from './components/Divider';
import Flex from './components/Flex';
import Grid from './components/Grid';
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
import radii from './foundations/radii';
import sizes from './foundations/sizes';
import space from './foundations/space';
import { fontSizes, fontWeights, fonts, letterSpacings, lineHeights } from './foundations/typography';
import zIndices from './foundations/zIndices';
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
  space,
  styles: {
    global,
  },
  breakpoints,
  sizes,
  radii,
  zIndices,
  components: {
    Avatar,
    Badge,
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    Flex,
    Grid,
    Heading,
    Highlight,
    Input,
    Link,
    Mark,
    Modal,
    Select,
    Table,
    Tabs,
    Text,
    VStack,
  },
};

export default extendTheme(overrides) as Record<string, string>;
