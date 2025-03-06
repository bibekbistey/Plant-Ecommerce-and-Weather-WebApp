import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";

import { card, cod, esewa, khalti } from "../../assets";
import { CartApi } from "../../api/Cart";

const CartShipping = () => {
  const { data: CartData } = CartApi();
  const price = CartData?.data?.map((item) => item.price);
  console.log(price);

  const total = price?.reduce((acc, curr) => acc + curr, 0);
  console.log(total);
  return (
    <Box width={"350px"} bg={""} rounded={"xl"} height={"450px"}>
      <Text textAlign={"center"} fontSize={"20px"} fontWeight={800}>
        Cart Shipping
      </Text>
      <Stack p={5}>
        <Text fontWeight={"semibold"}>Card Details</Text>
        <Stack gap={5}>
          <Text>Card Type</Text>
          <HStack gap={5}>
            <Box width={"75px"} height={"50px"}>
              <Image src={esewa}></Image>
            </Box>
            <Box width={"75px"} height={"50px"}>
              <Image src={khalti}></Image>
            </Box>
            <Box width={"75px"} height={"50px"}>
              <Image src={card}></Image>
            </Box>
            <Box width={"75px"} height={"50px"}>
              <Image src={cod}></Image>
            </Box>
          </HStack>
        </Stack>
        <Stack gap={5}>
          <Flex>
            <Text>Subtotal: Rs. {total} </Text>
          </Flex>
          <Flex>
            <Text>Shipping: Rs. {0}</Text>
          </Flex>
          <Flex>
            <Text>Total: Rs. {total}</Text>
          </Flex>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CartShipping;
