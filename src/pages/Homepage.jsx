import { Box } from "@chakra-ui/react";

import { background } from "../assets";
import Herosection from "../components/Homepage Compnents/Herosection";
import TrendyPlants from "../components/Homepage Compnents/TrendyPlants";
import CustomerReview from "../components/Homepage Compnents/CustomerReview";
import TopSelling from "../components/Homepage Compnents/TopSelling";

const Homepage = () => {
  return (
    <Box>
      <Box
        width={"100%"}
        height={"1992px"}
        backgroundImage={`url(${background})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        pt={"100px"}
        px={"50px"}
      >
        <Herosection />
        <TrendyPlants />
      </Box>

      <Box pt={5} mt={-10} minH={"100vh"} bg={"#1B2316"}>
        <Box>
          <TopSelling />
        </Box>
        <CustomerReview />
      </Box>
    </Box>
  );
};

export default Homepage;
