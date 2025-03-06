import { Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Tomorrow = ({ nextDay }) => {
  return (
    nextDay && (
      <Stack width={"100%"} gap={3} height={"140px"}>
        {nextDay.map((one) => {
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
              <Image
                height={"70px"}
                width={"70px"}
                objectFit={"cover"}
                src={`https://openweathermap.org/img/wn/${one.weather[0].icon}@2x.png`}
              ></Image>

              <Heading fontSize={"2xl"}>
                {one.main.temp.toFixed() - 270}&deg;F
              </Heading>

              <Heading fontSize={"2xl"}>{hours}</Heading>
            </Flex>
          );
        })}
      </Stack>
    )
  );
};

export default Tomorrow;
