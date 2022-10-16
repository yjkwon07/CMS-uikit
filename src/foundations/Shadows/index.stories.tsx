import { Fragment } from 'react';

import { Box, Flex, Table, Tbody, Td, Th, Thead, ThemeTypings, Tr, useTheme } from '@chakra-ui/react';

export default {
  title: 'Foundations/Shadows',
};

export const Default = () => {
  const theme = useTheme();

  const shadowsProps = theme.shadows as Record<ThemeTypings['shadows'], string>;
  const SHADOW_LIST = Object.keys(shadowsProps) as ThemeTypings['shadows'][];

  return (
    <Flex direction="column" rowGap="5" p={4}>
      <Table>
        <Thead>
          <Th>Name</Th>
          <Th>shadow</Th>
          <Th />
        </Thead>
        <Tbody>
          {SHADOW_LIST.map((shadow) => (
            <Tr key={shadow}>
              <Td>{shadow}</Td>
              <Td>
                {shadowsProps[shadow].split(/, (?=[a-zA-Z])|, (?=#)|\), (?=0)/).map((text) => (
                  <Fragment key={text}>
                    {text.includes('(') && !text.includes(')') ? `${text})` : text}
                    <br />
                  </Fragment>
                ))}
              </Td>
              <Td>
                <Box p="6" bg="white" shadow={shadow} rounded="md">
                  {shadow}
                </Box>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  );
};
