import { Flex, Table, Tbody, Td, Th, Thead, ThemeTypings, Tr, useTheme } from '@chakra-ui/react';

export default {
  title: 'Foundations/ZIndices',
};

export const Default = () => {
  const theme = useTheme();

  const zIndicesProps = theme.zIndices;
  const Z_INDEX_LIST = Object.keys(zIndicesProps).sort((a, b) =>
    zIndicesProps[a] === 'auto' ? -1 : zIndicesProps[a] - zIndicesProps[b],
  ) as ThemeTypings['zIndices'][];

  return (
    <Flex direction="column" rowGap="5" p={4}>
      <Table>
        <Thead>
          <Th>Name</Th>
          <Th>zIndex</Th>
        </Thead>
        <Tbody>
          {Z_INDEX_LIST.map((zIndex) => (
            <Tr key={zIndex}>
              <Td>{zIndex}</Td>
              <Td>{zIndicesProps[zIndex]}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  );
};
