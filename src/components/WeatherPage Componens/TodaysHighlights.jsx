import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaTemperatureHigh } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { ImEyeBlocked } from "react-icons/im";
import { FaSoundcloud } from "react-icons/fa";
import { FaStopwatch } from "react-icons/fa";

const TodaysHighlights = ({ highlights }) => {
  console.log("highlights", highlights);
  return (
    <Box color={"white"} rounded={"3xl"} width={"100%"} height={"300px"}>
      <Text fontSize={"18px"} fontWeight={"bold"} mx={5}>
        Todays Highlights
      </Text>
      <Grid templateColumns="repeat(3,1fr)" gap={1}>
        <Box rounded={"md"} p={3}>
          <Stack
            rounded={"lg"}
            border={"1px"}
            bg={"white"}
            textColor={"black"}
            p={2}
            shadow={"dark-lg"}
          >
            <HStack>
              <FaTemperatureHigh size={45} color="gray" />
              {/* <Image height={"50px"} width={"50px"} src=""></Image> */}
              <Stack gap={0}>
                <Text fontWeight={"semibold"} fontSize={"20px"}>
                  Feels Like
                </Text>
                <Text fontSize={"13px"} color={"gray.600"}>
                  Normal
                </Text>
              </Stack>
            </HStack>
            <Heading fontSize={"20px"} textAlign={"center"}>
              {(highlights?.list[1].main?.feels_like - 270).toFixed()}&deg;F
            </Heading>
          </Stack>
        </Box>
        <Box rounded={"md"} p={3}>
          <Stack
            rounded={"lg"}
            border={"1px"}
            bg={"white"}
            textColor={"black"}
            p={2}
            shadow={"dark-lg"}
          >
            <HStack>
              {/* <Image height={"50px"} width={"50px"} src=""></Image> */}
              <FaWind size={45} color="gray" />
              <Stack gap={0}>
                <Text fontWeight={"semibold"} fontSize={"20px"}>
                  Wind
                </Text>
                <Text fontSize={"13px"} color={"gray.600"}>
                  {highlights?.list[1]?.wind?.gust}&deg;
                </Text>
              </Stack>
            </HStack>
            <Flex justifyContent={"center"} gap={1} alignItems={"center"}>
              <Heading fontSize={"20px"}>
                {highlights?.list[1]?.wind.speed}
              </Heading>
              <Text mt={2} fontSize={"10px"} color={"gray.600"}>
                Km/hr
              </Text>
            </Flex>
          </Stack>
        </Box>
        <Box rounded={"md"} p={3}>
          <Stack
            rounded={"lg"}
            border={"1px"}
            bg={"white"}
            textColor={"black"}
            p={2}
            shadow={"dark-lg"}
          >
            <HStack>
              <WiHumidity size={45} color="gray" />
              {/* <Image height={"50px"} width={"50px"} src=""></Image> */}
              <Stack gap={0}>
                <Text fontWeight={"semibold"} fontSize={"20px"}>
                  Humidity
                </Text>
                <Text fontSize={"13px"} color={"gray.600"}>
                  Normal
                </Text>
              </Stack>
            </HStack>
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Heading fontSize={"20px"} textAlign={"center"}>
                {highlights?.list[1]?.main.humidity}
              </Heading>
              <Text mt={2} fontSize={"10px"}>
                %
              </Text>
            </Flex>
          </Stack>
        </Box>
        <Box rounded={"md"} p={3}>
          <Stack
            rounded={"lg"}
            border={"1px"}
            bg={"white"}
            textColor={"black"}
            p={2}
            shadow={"dark-lg"}
          >
            <HStack>
              <ImEyeBlocked size={45} color="gray" />
              {/* <Image height={"50px"} width={"50px"} src=""></Image> */}
              <Stack gap={0}>
                <Text fontWeight={"semibold"} fontSize={"20px"}>
                  Visibility
                </Text>
                <Text fontSize={"13px"} color={"gray.600"}>
                  Normal
                </Text>
              </Stack>
            </HStack>
            <Heading textAlign={"center"} fontSize={"20px"}>
              {highlights?.list[1]?.visibility}
            </Heading>
          </Stack>
        </Box>
        <Box rounded={"md"} p={3}>
          <Stack
            rounded={"lg"}
            border={"1px"}
            bg={"white"}
            textColor={"black"}
            p={2}
            shadow={"dark-lg"}
          >
            <HStack>
              <FaStopwatch size={45} />

              <Stack gap={0}>
                <Text fontWeight={"semibold"} fontSize={"20px"}>
                  Pressure
                </Text>
                <Text fontSize={"13px"} color={"gray.600"}>
                  Normal
                </Text>
              </Stack>
            </HStack>
            <Heading textAlign={"center"} fontSize={"20px"}>
              {highlights?.list[1]?.main.pressure}
            </Heading>
          </Stack>
        </Box>
        <Box rounded={"md"} p={3}>
          <Stack
            rounded={"lg"}
            border={"1px"}
            bg={"white"}
            textColor={"black"}
            p={2}
            shadow={"dark-lg"}
          >
            <HStack>
              <FaSoundcloud size={45} />
              {/* <Image height={"50px"} width={"50px"} src=""></Image> */}
              <Stack gap={0}>
                <Text fontWeight={"semibold"} fontSize={"20px"}>
                  Clouds
                </Text>
                <Text fontSize={"13px"} color={"gray.600"}>
                  Normal
                </Text>
              </Stack>
            </HStack>
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Heading textAlign={"center"} fontSize={"20px"}>
                {highlights?.list[1]?.clouds.all}
              </Heading>
              <Text mt={2} fontSize={"10px"}>
                %
              </Text>
            </Flex>
          </Stack>
        </Box>
      </Grid>
    </Box>
  );
};

export default TodaysHighlights;
