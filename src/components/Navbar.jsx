import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { CiMenuFries } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { CartApi } from "../api/Cart";
import { logo } from "../assets";
import { useCartCountStore } from "../store/cartstore";
import { useLoginModalStore } from "../store/loginStore";
import { IoExitOutline } from "react-icons/io5";

const Navbar = () => {
  const { count, setCount } = useCartCountStore();
  const { data: CartData } = CartApi();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { openLogin, setLogin } = useLoginModalStore();

  console.log("hello", openLogin);

  const navigate = useNavigate();

  useEffect(() => {
    if (CartData) {
      setCount(CartData.data.length);
    }
  }, [CartData]);

  const token = localStorage.getItem("token");
  const toast = useToast();
  console.log(token);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLogin(false);
    toast({
      title: "Logged out Succesfully",
      duration: 3000,
      status: "success",
      isClosable: true,
    });
  };

  return (
    <>
      <Box position={"absolute"} zIndex={1} top={0} left={0} right={0} p={5}>
        <Flex
          justifyContent={"space-between"}
          color={"white"}
          width={"100%"}
          height={"50px"}
          alignItems={"stretch"}
          bg={"#252D23"}
          border={"2px"}
          borderColor={"#FFFFFF33"}
          borderRadius={"20px"}
          py={7}
          px={2}
        >
          <HStack
            cursor={"pointer"}
            onClick={() => {
              navigate("/");
            }}
          >
            <Image height={"48px"} width={"48px"} src={logo}></Image>
            <Heading fontWeight={900} fontSize={"28px"} fontFamily={""}>
              Planto.
            </Heading>
          </HStack>

          <HStack spacing={10} display={{ base: "none", md: "flex" }}>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/product"}>Plants</NavLink>
            <NavLink to={"/weather"}>Weather</NavLink>
            <NavLink to={"/weather"}>About Us</NavLink>
          </HStack>
          <HStack spacing={5} mr={{ base: 0, md: 5 }}>
            <Box display={{ base: "none", md: "block" }}>
              {!token ? (
                <Text onClick={() => setLogin(true)} cursor={"pointer"}>
                  Login
                </Text>
              ) : (
                <HStack
                  onClick={() => {
                    handleLogout();
                  }}
                  cursor={"pointer"}
                >
                  <IoExitOutline size={25} />

                  <Text fontSize={"sm"}>Logout</Text>
                </HStack>
              )}
            </Box>
            {/* <Box onClick={() => setRegister(true)}>
              <Text cursor={"pointer"}>Register</Text>
            </Box> */}
            {token ? (
              <>
                <Box>
                  <NavLink to={"/cart"}>
                    {count > 0 ? (
                      <Box position={"relative"}>
                        <IoBagHandleOutline size={20} />
                        <Box
                          height={"15px"}
                          width={"15px"}
                          border={"1px solid"}
                          rounded={"full"}
                          bg={"red"}
                          position={"absolute"}
                          left={4}
                          bottom={3}
                        >
                          <Text
                            fontSize={"10px"}
                            textColor={"white"}
                            textAlign={"center"}
                          >
                            {count}
                          </Text>
                        </Box>
                      </Box>
                    ) : (
                      <Box>
                        <IoBagHandleOutline size={20} />
                      </Box>
                    )}
                  </NavLink>
                </Box>
              </>
            ) : (
              ""
            )}
            <Box display={{ base: "flex", md: "none" }}>
              <CiMenuFries size={20} onClick={onOpen} />
            </Box>

            {/* ------------------------Drawer for Small Screen-------------------- */}
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent bg={"#252D23"}>
                <HStack>
                  <DrawerCloseButton
                    mt={6}
                    color={"red"}
                    bg={"red"}
                    textColor={"white"}
                    rounded={"full"}
                    width={6}
                    height={6}
                  />
                  <DrawerHeader>
                    <HStack
                      color={"white"}
                      cursor={"pointer"}
                      onClick={() => {
                        navigate("/");
                      }}
                    >
                      <Image height={"48px"} width={"48px"} src={logo}></Image>
                      <Heading
                        fontWeight={900}
                        fontSize={"28px"}
                        fontFamily={""}
                      >
                        Planto.
                      </Heading>
                    </HStack>
                  </DrawerHeader>
                </HStack>
                <Divider width={"90%"} mx={"auto"} />

                <DrawerBody mt={10}>
                  <Stack spacing={5} color={"white"}>
                    <NavLink to={"/"} onClick={onClose}>
                      Home
                    </NavLink>
                    <Divider />
                    <NavLink to={"/product"} onClick={onClose}>
                      Plants
                    </NavLink>
                    <Divider />
                    <NavLink to={"/weather"} onClick={onClose}>
                      Weather
                    </NavLink>
                    <Divider />
                    <NavLink to={"/weather"} onClick={onClose}>
                      About Us
                    </NavLink>
                    <Divider />
                  </Stack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
