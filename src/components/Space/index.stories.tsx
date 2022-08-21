import { FC } from 'react';

import { Box, Table, Tbody, Td, Th, Thead, ThemeTypings, Tr, useTheme } from '@chakra-ui/react';

export default {
  title: 'Theme/Space',
};

export const Default: FC = () => {
  const theme = useTheme();

  const rootFontSize = 16;
  const SPACE_LIST = Object.keys(theme.space).sort(
    (a, b) =>
      Number(theme.space[a].replace(/(rem|px)/, '')) * (theme.space[a].includes('rem') ? rootFontSize : 1) -
      Number(theme.space[b].replace(/(rem|px)/, '')) * (theme.space[b].includes('rem') ? rootFontSize : 1),
  ) as ThemeTypings['space'][];

  return (
    <Table>
      <Thead>
        <Th>Name</Th>
        <Th>Space</Th>
        <Th>Pixels</Th>
        <Th />
      </Thead>
      <Tbody>
        {Object.values(SPACE_LIST).map((space) => (
          <Tr key={space}>
            <Td>{space}</Td>
            <Td>{theme.space[space]}</Td>
            <Td>
              {Number(theme.space[space].replace(/(rem|px)/, '')) *
                (theme.space[space].includes('rem') ? rootFontSize : 1)}
              px
            </Td>
            <Td>
              <Box w={theme.space[space]} h="4" bg="blue.400" />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
