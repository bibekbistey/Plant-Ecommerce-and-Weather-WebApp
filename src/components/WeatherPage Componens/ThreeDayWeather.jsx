import {
  Container,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Tomorrow from "./Tomorrow";
import Today from "./Today";
import ThirdDay from "./ThirdDay";

const ThreeDayWeather = ({ data }) => {
  const today = data?.list?.slice(0, 9);
  const nextDay = data?.list?.slice(10, 19);
  const thirdDay = data?.list?.slice(18, 27);

  return (
    <Container
      height={"300px"}
      width={"100%"}
      rounded={"3xl"}
      bg={"#2E2F38"}
      p={0}
      mx={0}
    >
      <Tabs align="end" variant={"soft-rounded"} colorScheme="green">
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Text mx={10} fontSize={"xl"} fontWeight={500}>
            Forecast
          </Text>
          <TabList p={1}>
            <Tab color={"white"}>Today</Tab>
            <Tab color={"white"}>Tomorrow</Tab>
            <Tab color={"white"}>3-Day</Tab>
          </TabList>
        </Flex>
        <TabPanels
          overflowY={"auto"}
          height={"250px"}
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <TabPanel px={2} py={1}>
            <Today todaydata={today} />
          </TabPanel>

          <TabPanel px={2} py={1}>
            <Tomorrow nextDay={nextDay} />
          </TabPanel>
          <TabPanel px={2} py={1}>
            <ThirdDay thirdDayData={thirdDay} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
};

export default ThreeDayWeather;
