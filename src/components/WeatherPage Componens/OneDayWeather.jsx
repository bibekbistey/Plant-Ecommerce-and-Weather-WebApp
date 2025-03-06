import {
  Box,
  Center,
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

const OneDayWeather = ({ data }) => {
  const slicedData = data?.list?.slice(0, 9);

  console.log("data", data);
  const time = new Date(data?.list[0].dt_txt);
  const t = time.toLocaleTimeString();

  console.log("t", t);

  console.log(time);
  return (
    data && (
      <Box
        color={"white"}
        bg={"#2E2F38"}
        // p={3}
        rounded={"3xl"}
        width={"100%"}
        height={"300px"}
      >
        <Stack fontFamily={"mono"} p={0}>
          <Box height={"150px"} width={"100%"} p={2}>
            <Flex alignItems={"center"} justifyContent={"space-between"} mr={3}>
              <Box>
                {data.list[1]?.weather?.map((weat) => {
                  return (
                    <Image
                      height={"140px"}
                      width={"120px"}
                      objectFit={"cover"}
                      src={`https://openweathermap.org/img/wn/${weat.icon}@2x.png`}
                    ></Image>
                  );
                })}
              </Box>
              <Stack>
                <Heading fontSize={"3xl"}>{data?.city.name}</Heading>
                <Text>{data?.city.country}</Text>
              </Stack>
              <Stack>
                <Heading>
                  {(data?.list[1]?.main.temp).toFixed() - 270}&deg;F
                </Heading>

                <Text>Temperature</Text>
              </Stack>
              <Stack>
                <HStack>
                  <Heading>{data?.list[0]?.main.humidity}</Heading>
                  <Text mt={5} fontSize={"sm"}>
                    %
                  </Text>
                </HStack>
                <Text>Humidity</Text>
              </Stack>
              <Stack>
                <HStack>
                  <Heading>{data?.list[0]?.wind.speed}</Heading>
                  <Text fontSize={"sm"}>km/hr</Text>
                </HStack>
                <Text>Wind Speed</Text>
              </Stack>
            </Flex>
          </Box>
          <Flex width={"100%"} gap={5} height={"140px"} p={2}>
            {slicedData.map((one) => {
              const time = new Date(one.dt_txt);
              const t = time.toLocaleTimeString();
              const hours = t.slice(0, 5);
              return (
                <Flex
                  height={"120px"}
                  width={"80px"}
                  border={"1px"}
                  rounded={"3xl"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  bg={"#CBE9E8"}
                  color={"black"}
                  fontWeight={"semibold"}
                >
                  <Stack p={2} textAlign={"center"}>
                    <Text>{hours}</Text>
                    <Image
                      height={"50px"}
                      width={"50px"}
                      src={`https://openweathermap.org/img/wn/${one.weather[0].icon}@2x.png`}
                    ></Image>
                    <Text>{one.main.temp.toFixed() - 270}&deg;F</Text>
                  </Stack>
                </Flex>
              );
            })}
          </Flex>
        </Stack>
      </Box>
    )
  );
};

export default OneDayWeather;
