import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Today = ({ todaydata }) => {
  return (
    todaydata && (
      <Stack width={"100%"} gap={3} height={"140px"}>
        {todaydata.map((one) => {
          const time = new Date(one.dt_txt);
          const t = time.toLocaleTimeString();
          const hours = t.slice(0, 5);
          return (
            <Flex
              height={"80px"}
              width={"100%"}
              rounded={"3xl"}
              alignItems={"center"}
              justifyContent={"space-between"}
              bg={"#1E1F23"}
              color={"white"}
              fontWeight={"semibold"}
              px={4}
            >
              <HStack spacing={5}>
                <Image
                  height={"70px"}
                  width={"70px"}
                  objectFit={"cover"}
                  src={`https://openweathermap.org/img/wn/${one.weather[0].icon}@2x.png`}
                ></Image>
                <Stack textAlign={"center"}>
                  <Text mr={0}>{one.weather[0].main}</Text>
                  <Text>{one.weather[0].description}</Text>
                </Stack>
              </HStack>
              <HStack>
                <Heading fontSize={"2xl"}>
                  {one.main.temp.toFixed() - 270}&deg;F
                </Heading>
                <Text mt={2} fontSize={"xs"}>
                  / {one.main.temp.toFixed() - 272}&deg;F
                </Text>
              </HStack>

              <Heading fontSize={"2xl"}>{hours}</Heading>
            </Flex>
          );
        })}
      </Stack>
    )
  );
};

export default Today;
