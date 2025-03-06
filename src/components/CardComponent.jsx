import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";

import { IoBagHandleOutline } from "react-icons/io5";

const CardComponent = ({
  name,
  description,
  image,
  price,
  cartIcon,
  onCartClick,
}) => {
  return (
    <Stack mt={10} color={"white"} p={5}>
      <Box
        bg={"#252D23"}
        width={"320px"}
        height={"400px"}
        borderRadius={"37px"}
        border={"2px"}
        borderColor={"#FFFFFF33"}
        position={"relative"}
        mt={10}
      >
        <Image
          position={"absolute"}
          width={"309px"}
          height={"309px"}
          bottom={"180px"}
          src={image}
        ></Image>
        <Stack mt={"200px"} p={5} spacing={3}>
          <Text fontSize={"20px"}>{name}</Text>
          <Flex>
            <Text fontSize={"14px"} noOfLines={2} fontWeight={100}>
              {description}
            </Text>
          </Flex>
          <Flex justifyContent={"space-between"} alignItems={"center"} mt={3}>
            <Text fontSize={"20px"}>Rs. {price}</Text>
            {cartIcon && (
              <Box
                border={"1px"}
                p={1}
                borderColor={"white"}
                borderRadius={5}
                color={"whi"}
                mr={5}
                cursor={"pointer"}
                onClick={onCartClick}
              >
                <IoBagHandleOutline size={20} />
              </Box>
            )}
          </Flex>
        </Stack>
      </Box>
    </Stack>
  );
};

export default CardComponent;
