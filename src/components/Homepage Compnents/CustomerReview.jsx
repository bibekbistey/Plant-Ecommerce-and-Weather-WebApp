import {
  Avatar,
  Box,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { avatar, avatar1, avatar3 } from "../../assets";

const CustomerReview = () => {
  return (
    <Stack mt={10} color={"white"} pb={20}>
      <Heading textAlign={"center"} color={"white"}>
        Customer Review
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} mx={"auto"}>
        <Box
          mt={10}
          bg={"#242B21"}
          width={"350px"}
          height={"200px"}
          border={"2px"}
          borderColor={"#FFFFFF33"}
          borderRadius={"30px"}
          pt={5}
          px={10}
        >
          <HStack gap={5}>
            <Avatar height="70px" width={"70px"} src={avatar1}></Avatar>
            <Stack>
              <Text fontSize={"22px"}>Bibek Bista</Text>
              <HStack>
                {[...Array(4)].map((_, i) => (
                  <StarIcon key={i} color="yellow.400" width="15px" />
                ))}
              </HStack>
            </Stack>
          </HStack>
          <Text mt={7} textColor={"gray.500"} noOfLines={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            officia!
          </Text>
        </Box>
        <Box
          mt={10}
          bg={"#242B21"}
          width={"350px"}
          height={"200px"}
          border={"2px"}
          borderColor={"#FFFFFF33"}
          borderRadius={"30px"}
          pt={5}
          px={10}
        >
          <HStack gap={5}>
            <Avatar height="70px" width={"70px"} src={avatar}></Avatar>
            <Stack>
              <Text fontSize={"22px"}>Bibek Bista</Text>
              <HStack>
                {[...Array(4)].map((_, i) => (
                  <StarIcon key={i} color="yellow.400" width="15px" />
                ))}
              </HStack>
            </Stack>
          </HStack>
          <Text mt={7} textColor={"gray.500"} noOfLines={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            officia!
          </Text>
        </Box>
        <Box
          mt={10}
          bg={"#242B21"}
          width={"350px"}
          height={"200px"}
          border={"2px"}
          borderColor={"#FFFFFF33"}
          borderRadius={"30px"}
          pt={5}
          px={10}
        >
          <HStack gap={5}>
            <Avatar height="70px" width={"70px"} src={avatar3}></Avatar>
            <Stack>
              <Text fontSize={"22px"}>Bibek Bista</Text>
              <HStack>
                {[...Array(4)].map((_, i) => (
                  <StarIcon key={i} color="yellow.400" width="15px" />
                ))}
              </HStack>
            </Stack>
          </HStack>
          <Text mt={7} textColor={"gray.500"} noOfLines={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            officia!
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  );
};

export default CustomerReview;
