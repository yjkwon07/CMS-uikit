import { Box, Flex, Table, Tbody, Td, Th, Thead, ThemeTypings, Tr, useTheme } from '@chakra-ui/react';

export default {
  title: 'Foundations/Borders',
};

export const Default = () => {
  const theme = useTheme();

  const bordersProps = theme.borders as Record<ThemeTypings['borders'], string>;
  const BORDER_LIST = Object.keys(bordersProps) as ThemeTypings['borders'][];

  return (
    <Flex direction="column" rowGap="5" p={4}>
      <Table>
        <Thead>
          <Th>Name</Th>
          <Th>border</Th>
          <Th />
        </Thead>
        <Tbody>
          {BORDER_LIST.map((border) => (
            <Tr key={border}>
              <Td>{border}</Td>
              <Td>{bordersProps[border]}</Td>
              <Td>
                <Box p="6" bg="white" border={border} rounded="md">
                  {border}
                </Box>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  );
};
