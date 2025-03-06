import {
  Box,
  Heading,
  Input,
  Spinner,
  Text,
  Avatar,
  Flex,
  HStack,
  InputGroup,
  InputRightElement,
  Grid,
} from "@chakra-ui/react";
import { useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { SearchIcon } from "@chakra-ui/icons";

import { handleWeatherApi } from "../api/WeatherApi";
import OneDayWeather from "../components/WeatherPage Componens/OneDayWeather";
import Map from "../components/WeatherPage Componens/Map";
import TodaysHighlights from "../components/WeatherPage Componens/TodaysHighlights";
import ThreeDayWeather from "../components/WeatherPage Componens/ThreeDayWeather";
import { avatar } from "../assets";

const Weather = () => {
  const [input, setInput] = useState("");
  const [location, setLocation] = useState("kathmandu");

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["weather", location],
    queryFn: () => handleWeatherApi(location),
  });

  const addLocation = () => {
    setLocation(input || "kathmandu");
    setInput("");
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

  const time = new Date();
  const t = time.toDateString();

  return (
    <Box
      p={5}
      textColor={"white"}
      width={"100%"}
      height={"100vh"}
      bg={"#1E1F23"}
      overflow={"auto"}
      pt={"100px"}
    >
      <Flex
        width={"100%"}
        bg={"#1E1F23"}
        justifyContent={"space-between"}
        color={"white"}
      >
        <Flex gap={4}>
          <Avatar src={avatar} size={"md"}></Avatar>
          <Box>
            <Text>Hi, Bibek</Text>
            <Heading fontSize={"xl"}>{t}</Heading>
          </Box>
        </Flex>
        <HStack>
          <InputGroup bg={"#2E2F38"} rounded={"lg"}>
            <Input
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              type="text"
              placeholder="Search city"
            ></Input>
            <InputRightElement onClick={() => addLocation()}>
              <SearchIcon cursor={"pointer"} />
            </InputRightElement>
          </InputGroup>
        </HStack>
      </Flex>
      {data && (
        <>
          <Flex mt={4} width={"100%"} gap={5}>
            <Box width={{ base: "100%", md: "60%" }}>
              <OneDayWeather data={data} />
            </Box>
            <Box width={"40%"}>
              <Map data={data} />
            </Box>
          </Flex>
          <Flex mt={4} width={"100%"} gap={8}>
            <Box width={{ base: "100%", md: "60%" }}>
              <TodaysHighlights highlights={data}></TodaysHighlights>
            </Box>
            <Box width={"40%"}>
              <ThreeDayWeather data={data} />
            </Box>
          </Flex>
        </>
      )}
    </Box>
  );
};

export default Weather;
