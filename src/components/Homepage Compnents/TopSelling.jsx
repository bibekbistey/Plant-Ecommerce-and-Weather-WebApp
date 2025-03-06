import { Heading, SimpleGrid, Stack } from "@chakra-ui/react";

import { plant, plant1, plant2 } from "../../assets";
import CardComponent from "../CardComponent";

const TopSelling = () => {
  return (
    <Stack mt={10} color={"white"} p={10}>
      <Heading textAlign={"center"} color={"white"}>
        Our Top Selling
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}>
        <CardComponent
          image={plant}
          name={"Calathea plant"}
          description={
            "A hardy indoor plant with thick, glossy leaves that add a touch of elegance to any space."
          }
          price={"300"}
          cartIcon={true}
        />
        <CardComponent
          image={plant1}
          name={"Calathea plant"}
          description={
            "A beautiful flowering plant that thrives in low light and helps purify the air"
          }
          price={"300"}
          cartIcon={true}
        />
        <CardComponent
          image={plant2}
          name={"Calathea plant"}
          description={
            "A medicinal succulent known for its soothing gel and air-purifying properties"
          }
          price={"300"}
          cartIcon={true}
        />
      </SimpleGrid>
    </Stack>
  );
};

export default TopSelling;
