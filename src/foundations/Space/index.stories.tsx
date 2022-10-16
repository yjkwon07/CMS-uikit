import { Box, Table, Tbody, Td, Th, Thead, ThemeTypings, Tr, useTheme } from '@chakra-ui/react';

export default {
  title: 'Foundations/Space',
};

export const Default = () => {
  const theme = useTheme();

  const rootFontSize = 16;

  const spaceProps = theme.space;
  const SPACE_LIST = Object.keys(spaceProps).sort(
    (a, b) =>
      Number(spaceProps[a].replace(/(rem|px)/, '')) * (spaceProps[a].includes('rem') ? rootFontSize : 1) -
      Number(spaceProps[b].replace(/(rem|px)/, '')) * (spaceProps[b].includes('rem') ? rootFontSize : 1),
  ) as ThemeTypings['space'][];

  return (
    <Table>
      <Thead>
        <Th>Name</Th>
        <Th>Space</Th>
        <Th>Pixel</Th>
        <Th />
      </Thead>
      <Tbody>
        {SPACE_LIST.map((space) => (
          <Tr key={space}>
            <Td>{space}</Td>
            <Td>{spaceProps[space]}</Td>
            <Td>
              {Number(spaceProps[space].replace(/(rem|px)/, '')) *
                (spaceProps[space].includes('rem') ? rootFontSize : 1)}
              px
            </Td>
            <Td>
              <Box w={spaceProps[space]} h="4" bg="blue.400" />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
