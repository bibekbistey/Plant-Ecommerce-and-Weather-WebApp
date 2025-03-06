import { useState } from "react";
import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Spinner,
  Stack,
  useToast,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

import { ProductsApi } from "../api/Products";
import CardComponent from "../components/CardComponent";
import { useCartMutation } from "../api/Cart";
import { useCartCountStore } from "../store/cartstore";

const Product = () => {
  const { data: ProductsData, isLoading, isError, error } = ProductsApi();
  console.log(ProductsData);
  const { mutate: cartData } = useCartMutation();
  const { count, setCount } = useCartCountStore();
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    ProductsData.filter((text) => text.name == search);
  };
  const toast = useToast();

  const handlemutation = (products) => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast({
        title: "Please log in to add items to the cart",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    cartData(products);
    setCount(count + 1);
  };

  if (isLoading) {
    return (
      <Grid placeItems={"center"} height={"1000px"}>
        <Spinner />;
      </Grid>
    );
  }
  if (isError) {
    return <Box>{error.message}</Box>;
  }

  return (
    <Box minH={"100vh"} bg={"#1B2316"}>
      <Stack pt={"100px"}>
        <Heading
          color={"white"}
          ml={{ md: 5 }}
          textAlign={{ md: "start", lg: "center" }}
          display={{ base: "none", md: "block" }}
        >
          Our Products
        </Heading>
        <Flex
          // justifyContent={{ base: "center", md: "end" }}
          position={"absolute"}
          right={{ base: 12 }}
        >
          <InputGroup color={"white"}>
            <Input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              placeholder="Search products"
            ></Input>
            <InputRightElement>
              <SearchIcon
                color={"white"}
                cursor={"pointer"}
                onClick={handleSearch}
              />
            </InputRightElement>
          </InputGroup>
        </Flex>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
          mx={{ base: "auto", lg: "0" }}
          mt={{ base: 5, md: "0" }}
        >
          {ProductsData?.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
          ).map((product, index) => {
            return (
              <HStack key={index}>
                <CardComponent
                  name={product.name}
                  description={product.description}
                  image={product.image}
                  price={product.price}
                  cartIcon={true}
                  onCartClick={() => {
                    handlemutation(product);
                  }}
                />
              </HStack>
            );
          })}
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default Product;
