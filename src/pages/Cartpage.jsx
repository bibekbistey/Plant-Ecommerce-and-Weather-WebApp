import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import CartDetails from "../components/Cart/CartDetails";
import CartShipping from "../components/Cart/CartShipping";

const Cartpage = () => {
  return (
    <Box minH={"100vh"} bg={"#1B2316"} color={"white"}>
      <Heading pt={"100px"} textAlign={"center"}>
        Cart
      </Heading>
      <Grid
        templateColumns={{ base: "repeat(2,1fr)", lg: "repeat(3,1fr)" }}
        mt={10}
        gap={5}
      >
        <GridItem colSpan={2} mt={10}>
          <CartDetails />
        </GridItem>
        <GridItem>
          <CartShipping />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Cartpage;
