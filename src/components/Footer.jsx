import { NavLink } from "react-router-dom";
import {
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";

import { logo } from "../assets";

const Footer = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={{ base: 8, md: 12, lg: 16 }}
      bg={"#222C1D"}
      width={"100%"}
      height={"full"}
      p={10}
      color={"white"}
    >
      <GridItem>
        <Stack>
          <HStack>
            <Image height={"48px"} width={"48px"} src={logo} />
            <Heading fontWeight={900} fontSize={"28px"}>
              Planto.
            </Heading>
          </HStack>
          <Text width={"400px"} mx={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
            repellat!
          </Text>
        </Stack>
      </GridItem>
      <GridItem>
        <Stack gap={5}>
          <Text fontSize={"18px"} fontWeight={700}>
            Quick Links
          </Text>
          <Stack gap={3} fontWeight={300}>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/product"}>Plants</NavLink>
            <NavLink to={"/weather"}>Weather</NavLink>
            <NavLink to={"/weather"}>About Us</NavLink>
          </Stack>
        </Stack>
      </GridItem>
      <GridItem>
        <Stack gap={5}>
          <Text fontSize={"18px"} fontWeight={700}>
            For Every Update
          </Text>
          <InputGroup width={{ base: "60%", lg: "100%" }}>
            <Input placeholder="Enter your mail"></Input>
            <InputRightElement mr={8}>
              <Text
                border={"1px solid"}
                p={1}
                bg={"white"}
                color={"black"}
                rounded={"md"}
                cursor={"pointer"}
                fontWeight={500}
              >
                Subscribe
              </Text>
            </InputRightElement>
          </InputGroup>
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default Footer;
