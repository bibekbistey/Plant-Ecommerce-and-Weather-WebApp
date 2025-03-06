import { ArrowDownIcon, ArrowUpIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const CartComponent = ({
  name,
  description,
  image,
  quantity,
  price,
  onClickDelete,
}) => {
  return (
    <Box
      width={"100%"}
      height={{ base: "80px", lg: "100px" }}
      boxShadow={"dark-lg"}
      rounded={"lg"}
    >
      <Flex p={1} mx={1} justifyContent={"space-between"} alignItems={"center"}>
        <HStack gap={5}>
          <Image
            src={image}
            height={{ base: "70px", lg: "90px" }}
            width={{ base: "70px", lg: "90px" }}
            rounded={"lg"}
          ></Image>
          <Stack>
            <Text fontWeight={{ base: 300, lg: 700 }}>{name}</Text>
            <Box display={{ base: "none", lg: "block" }}>
              <Text
                fontSize={"sm"}
                fontWeight={100}
                noOfLines={2}
                width={"350px"}
              >
                {description}
              </Text>
            </Box>
          </Stack>
        </HStack>
        <HStack>
          <Text>{quantity}</Text>
          <Stack>
            <ArrowDownIcon />
            <ArrowUpIcon />
          </Stack>
        </HStack>
        <Text>Rs. {price}</Text>
        <Box cursor={"pointer"} pr={5} color={"red"} onClick={onClickDelete}>
          <DeleteIcon />
        </Box>
      </Flex>
    </Box>
  );
};

export default CartComponent;
