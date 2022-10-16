import { Alert, AlertIcon, Box, Flex, Table, Tbody, Td, Th, Thead, ThemeTypings, Tr, useTheme } from '@chakra-ui/react';

export default {
  title: 'Foundations/Blur',
};

export const Default = () => {
  const theme = useTheme();

  const blurProps = theme.blur as Record<ThemeTypings['blur'], string>;
  const BLUR_LIST = Object.keys(blurProps) as ThemeTypings['blur'][];

  return (
    <Flex direction="column" rowGap="5" p={4}>
      <Alert status="info">
        <AlertIcon />
        To apply blur, brightness, contrast, hueRotate, invert, saturate props on the element, set filter prop value to
        &quot;auto&quot;.
      </Alert>
      <Table>
        <Thead>
          <Th>Name</Th>
          <Th>blur</Th>
          <Th />
        </Thead>
        <Tbody>
          {BLUR_LIST.map((blur) => (
            <Tr key={blur}>
              <Td>{blur}</Td>
              <Td>{blurProps[blur]}</Td>
              <Td>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    boxSize: '250px',
                    color: 'white',
                    textShadow: '0 0 20px black',
                    fontWeight: 'bold',
                    fontSize: '20px',
                    px: 4,
                    background: 'url(https://picsum.photos/id/1080/200/300) center/cover no-repeat',
                    blur,
                  }}
                  filter="auto"
                >
                  {blur}
                </Box>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Flex>
  );
};
