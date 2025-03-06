import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IoPlayCircleOutline } from "react-icons/io5";

import { StarIcon } from "@chakra-ui/icons";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import { avatar2, plant } from "../../assets";

const Herosection = () => {
  const navigate = useNavigate();
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      textColor={"white"}
      spacing={{ base: "200px", lg: "630px" }}
      mt={20}
    >
      <Stack width={"1000px"}>
        <Heading fontWeight={600} fontSize={{ base: "50px", lg: "118px" }}>
          Breath Natural
        </Heading>
        <Text width={{ base: "400px", lg: "full" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, magni
          molestias laboriosam autem sapiente at.
        </Text>
        <HStack>
          <Button
            _hover={{ bg: "gray.700" }}
            textColor={"white"}
            variant={"ghost"}
            border={"1px"}
            cursor={"pointer"}
            onClick={() => {
              navigate("/product");
            }}
          >
            Explore
          </Button>
          <Button
            _hover={{ bg: "#242B21" }}
            variant={"ghost"}
            color={"white"}
            cursor={"pointer"}
          >
            <HStack>
              <IoPlayCircleOutline size={50} />
              <Text fontWeight={400} fontSize={"20px"}>
                Live Demo..
              </Text>
            </HStack>
          </Button>
        </HStack>
        <Box
          mt={"130px"}
          bg={"#242B21"}
          width={"350px"}
          height={"150px"}
          border={"2px"}
          borderColor={"#FFFFFF33"}
          borderRadius={"30px"}
          pt={5}
          px={10}
        >
          <HStack>
            <Avatar src={avatar2}></Avatar>
            <Stack>
              <Text>Bibek Bista</Text>
              <HStack>
                {[...Array(4)].map((_, i) => (
                  <StarIcon key={i} color="yellow.400" width="10px" />
                ))}
              </HStack>
            </Stack>
          </HStack>
          <Text noOfLines={2} mt={3} textColor={"gray.500"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            officia!
          </Text>
        </Box>
      </Stack>
      {/* ------------------image----------------- */}
      <Box
        bg={"#242B21"}
        width={{ base: "200px", lg: "350px" }}
        height={{ base: "250px", lg: "400px" }}
        borderRadius={{ base: "50px", lg: "67px" }}
        border={"2px"}
        borderColor={"#FFFFFF33"}
        position={"relative"}
        mt={8}
      >
        <Image
          position={"absolute"}
          width={{ base: "250px", lg: "359px" }}
          height={{ base: "200px", lg: "359px" }}
          // top={-20}
          bottom={{ base: "160px", lg: "180px" }}
          src={plant}
        ></Image>
        <Stack mt={{ base: "80px", lg: "200px" }} p={5} spacing={3}>
          <Text>Trendy House Plant</Text>
          <Flex
            spacing={20}
            alignItems={"center"}
            justifyContent={"space-between"}
            pr={5}
          >
            <Text fontSize={{ base: "15px", lg: "28px" }} fontWeight={300}>
              Calathea Plant
            </Text>
            <MdOutlineKeyboardArrowRight size={25} />
          </Flex>
          <Button
            _hover={{ bg: "gray.700" }}
            width={{ base: "100px", lg: "150px" }}
            textColor={"white"}
            variant={"ghost"}
            border={"1px"}
            mx={{ base: 5, lg: 0 }}
          >
            Buy Now
          </Button>
        </Stack>
      </Box>
    </SimpleGrid>
  );
};

export default Herosection;
