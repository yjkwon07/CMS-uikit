import { FC } from 'react';

import { Box, Flex, Table, Tbody, Td, Th, Thead, ThemeTypings, Tr, useTheme } from '@chakra-ui/react';

export default {
  title: 'Theme/Radii',
};

export const Default: FC = () => {
  const theme = useTheme();

  const rootFontSize = 16;

  const radiiProps = theme.radii;
  const RADII_LIST = Object.keys(radiiProps).sort(
    (a, b) =>
      Number(radiiProps[a].replace(/(rem|px)/, '')) * (radiiProps[a].includes('rem') ? rootFontSize : 1) -
      Number(radiiProps[b].replace(/(rem|px)/, '')) * (radiiProps[b].includes('rem') ? rootFontSize : 1),
  ) as ThemeTypings['radii'][];

  return (
    <Flex direction="column" rowGap="5" p={4}>
      <Table>
        <Thead>
          <Th>Name</Th>
          <Th>Radii</Th>
          <Th>Pixels</Th>
          <Th />
        </Thead>
        <Tbody>
          {RADII_LIST.map((size) => (
            <Tr key={size}>
              <Td>{size}</Td>
              <Td>{radiiProps[size]}</Td>
              <Td>
                {Number(radiiProps[size].replace(/(rem|px)/, '')) *
                  (radiiProps[size].includes('rem') ? rootFontSize : 1)}
                px
              </Td>
              <Td>
                <Box boxSize="20" bg="blue.400" borderRadius={radiiProps[size]} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  );
};
