import {
  Alert,
  AlertIcon,
  Box,
  Divider,
  Flex,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  ThemeTypings,
  Tr,
  useTheme,
} from '@chakra-ui/react';

export default {
  title: 'Foundations/Sizes',
};

export const Default = () => {
  const theme = useTheme();

  const rootFontSize = 16;

  const sizesProps = theme.sizes;
  const SIZE_LIST = Object.keys(sizesProps)
    .filter((size) => typeof sizesProps[size] !== 'object' && size !== 'max' && size !== 'min' && size !== 'full')
    .sort(
      (a, b) =>
        Number(sizesProps[a].replace(/(rem|px)/, '')) * (sizesProps[a].includes('rem') ? rootFontSize : 1) -
        Number(sizesProps[b].replace(/(rem|px)/, '')) * (sizesProps[b].includes('rem') ? rootFontSize : 1),
    ) as ThemeTypings['sizes'][];

  const OBJECT_SIZE_LIST = Object.keys(sizesProps).filter(
    (size) => typeof sizesProps[size] === 'object',
  ) as ThemeTypings['sizes'][];

  return (
    <Flex direction="column" rowGap="5" p={4}>
      <Alert status="info">
        <AlertIcon />
        max, min, full props (like associated Grid, 100%) except just this page
      </Alert>
      <Table>
        <Thead>
          <Th>Name</Th>
          <Th>Size</Th>
          <Th>Pixel</Th>
          <Th />
        </Thead>
        <Tbody>
          {SIZE_LIST.map((size) => (
            <Tr key={size}>
              <Td>{size}</Td>
              <Td>{sizesProps[size]}</Td>
              <Td>
                {Number(sizesProps[size].replace(/(rem|px)/, '')) *
                  (sizesProps[size].includes('rem') ? rootFontSize : 1)}
                px
              </Td>
              <Td>
                <Box w={sizesProps[size]} h={sizesProps[size]} bg="blue.400" />
              </Td>
            </Tr>
          ))}
          <Divider />
          {OBJECT_SIZE_LIST.map((sizeKey) =>
            Object.keys(sizesProps[sizeKey]).map((size) => (
              <Tr key={size}>
                <Td>
                  {sizeKey}.{size}
                </Td>
                <Td>{sizesProps[sizeKey][size]}</Td>
                <Td>
                  {Number(sizesProps[sizeKey][size].replace(/(rem|px)/, '')) *
                    (sizesProps[sizeKey][size].includes('rem') ? rootFontSize : 1)}
                  px
                </Td>
                <Td>
                  <Box w={sizesProps[sizeKey][size]} h={sizesProps[sizeKey][size]} bg="blue.400" />
                </Td>
              </Tr>
            )),
          )}
        </Tbody>
      </Table>
    </Flex>
  );
};
