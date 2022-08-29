import { Grid, GridItem } from '@chakra-ui/react';

export default {
  title: 'Layout/Grid',
  component: Grid,
  argTypes: {},
};

export const Default = () => {
  return (
    <Grid gap={6} templateColumns="repeat(5, 1fr)">
      <GridItem h="10" bg="blue.500" />
      <GridItem h="10" bg="blue.500" />
      <GridItem h="10" bg="blue.500" />
      <GridItem h="10" bg="blue.500" />
      <GridItem h="10" bg="blue.500" />
    </Grid>
  );
};

export const Spanning = () => {
  return (
    <Grid gap={4} templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" h="200px">
      <GridItem bg="tomato" colSpan={1} rowSpan={2} />
      <GridItem bg="papayawhip" colSpan={2} />
      <GridItem bg="papayawhip" colSpan={2} />
      <GridItem bg="tomato" colSpan={4} />
    </Grid>
  );
};

export const StatingEnding = () => {
  return (
    <Grid gap={4} templateColumns="repeat(5, 1fr)">
      <GridItem h="10" bg="tomato" colSpan={2} />
      <GridItem h="10" bg="papayawhip" colEnd={6} colStart={4} />
    </Grid>
  );
};

export const TemplateAreas = () => {
  return (
    <Grid
      gap="1"
      templateRows="50px 1fr 30px"
      templateColumns="150px 1fr"
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      h="200px"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem area="header" pl="2" bg="orange.300">
        Header
      </GridItem>
      <GridItem area="nav" pl="2" bg="pink.300">
        Nav
      </GridItem>
      <GridItem area="main" pl="2" bg="green.300">
        Main
      </GridItem>
      <GridItem area="footer" pl="2" bg="blue.300">
        Footer
      </GridItem>
    </Grid>
  );
};
