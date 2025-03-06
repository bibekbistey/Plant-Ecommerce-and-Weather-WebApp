import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { plant1, plant2 } from "../../assets";
import { IoBagHandleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const TrendyPlants = () => {
  const navigate = useNavigate();
  return (
    <Stack mt={10}>
      <Heading textAlign={"center"} color={"white"}>
        Our Trendy Plants
      </Heading>
      <Box
        mt={"70px"}
        // bg={"#242B21"}
        width={{ md: "700px", lg: "1280px" }}
        height={{ md: "300px", lg: "400px" }}
        border={"2px"}
        borderColor={"#FFFFFF33"}
        borderRadius={{ md: "60px", lg: "100px" }}
        mx={"auto"}
        position={"relative"}
        backdropFilter="blur(30px)"
      >
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          alignContent={"stretch"}
        >
          <Image
            width={{ md: "380px", lg: "550px" }}
            height={{ md: "400px", lg: "550px" }}
            position={"absolute"}
            bottom={"1px"}
            left={-20}
            src={plant1}
          ></Image>
          <Stack
            spacing={5}
            position={"absolute"}
            top={{ md: 12, lg: 20 }}
            right={"30px"}
            color={"white"}
          >
            <Heading fontWeight={600} fontSize={{ md: "20px", lg: "35px" }}>
              For Small Decs Plants
            </Heading>
            <Text color={"gray.300"} width={{ md: "400px", lg: "600px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              eligendi.
            </Text>
            <Heading fontWeight={300} fontSize={"25px"}>
              Rs. 599/-
            </Heading>
            <HStack>
              <Button
                _hover={{ bg: "gray.700" }}
                variant={"ghost"}
                border={"1px"}
                color={"white"}
                onClick={() => {
                  navigate("/product");
                }}
              >
                Explore
              </Button>
              <Box
                border={"1px"}
                p={1}
                borderColor={"white"}
                borderRadius={5}
                color={"whi"}
              >
                <IoBagHandleOutline size={30} />
              </Box>
            </HStack>
          </Stack>
        </Flex>
      </Box>
      <Box
        mt={"70px"}
        // bg={"#242B21"}
        width={{ md: "700px", lg: "1280px" }}
        height={{ md: "300px", lg: "400px" }}
        border={"2px"}
        borderColor={"#FFFFFF33"}
        borderRadius={"100px"}
        mx={"auto"}
        position={"relative"}
        backdropFilter="blur(30px)"
      >
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          alignContent={"stretch"}
        >
          <Image
            width={{ md: "380px", lg: "550px" }}
            height={{ md: "400px", lg: "550px" }}
            position={"absolute"}
            bottom={"1px"}
            right={-4}
            src={plant2}
          ></Image>
          <Stack
            spacing={5}
            position={"absolute"}
            top={{ md: 12, lg: 20 }}
            left={"50px"}
            color={"white"}
          >
            <Heading fontWeight={600} fontSize={{ md: "20px", lg: "35px" }}>
              For Fresh Decs Plants
            </Heading>
            <Text color={"gray.300"} width={{ md: "400px", lg: "600px" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              eligendi.
            </Text>
            <Heading fontWeight={300} fontSize={"25px"}>
              Rs. 1599/-
            </Heading>
            <HStack>
              <Button
                _hover={{ bg: "gray.700" }}
                variant={"ghost"}
                border={"1px"}
                color={"white"}
                onClick={() => {
                  navigate("/product");
                }}
              >
                Explore
              </Button>
              <Box
                border={"1px"}
                p={1}
                borderColor={"white"}
                borderRadius={5}
                color={"white"}
              >
                <IoBagHandleOutline size={30} />
              </Box>
            </HStack>
          </Stack>
        </Flex>
      </Box>
    </Stack>
  );
};

export default TrendyPlants;
