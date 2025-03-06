import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useLoginMutation } from "../api/Login";
import { facebook, github, google, loginimage, logo } from "../assets";
import { useLoginModalStore, useRegisterModalStore } from "../store/loginStore";

const Login = () => {
  const { openLogin, setLogin } = useLoginModalStore();
  const { setRegister } = useRegisterModalStore();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const { mutate: loginMutate, isPending: isLoading } = useLoginMutation();

  const handleLogin = () => {
    loginMutate(
      { email: email, password: password },
      {
        onSuccess: () => {
          setemail("");
          setpassword("");
          setLogin(false);
        },
        onError: () => {},
      }
    );
  };

  return (
    <>
      <Modal size={"5xl"} isOpen={openLogin} onClose={() => setLogin(false)}>
        <ModalOverlay />
        <ModalContent
          height={"fit-content"}
          p={5}
          bg={"#252D23"}
          color={"white"}
        >
          <ModalHeader>
            <Flex alignItems={"center"} gap={2}>
              <Image height={"48px"} width={"48px"} src={logo}></Image>
              <Text mt={3}>Login</Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid columns={2}>
              <Box p={5}>
                <Stack mb={3}>
                  <Text>Email </Text>
                  <Input
                    value={email}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                    type="text"
                    placeholder="Enter your email"
                  ></Input>
                </Stack>
                <Stack>
                  <Text>Password</Text>
                  <Input
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                    type="password"
                    placeholder="Enter your password"
                  ></Input>
                </Stack>
                <Flex justifyContent={"end"} mt={2}>
                  <Text color={"orange.400"} cursor="pointer">
                    Forget Password?
                  </Text>
                </Flex>
                <VStack gap={5}>
                  <Button
                    _hover={"null"}
                    color={"white"}
                    bg={"#F25019"}
                    mt={10}
                    width={"full"}
                    onClick={() => {
                      handleLogin();
                    }}
                    isLoading={isLoading}
                  >
                    Signin
                  </Button>
                  <Text textAlign={"center"} fontWeight={400}>
                    Or continue with
                  </Text>
                </VStack>
                <VStack gap={10}>
                  <Flex justifyContent={"center"} gap={10} mt={5}>
                    <Box
                      border={"1px"}
                      borderRadius={"28px"}
                      height={"35px"}
                      width={"72px"}
                      bg={"white"}
                      borderColor={"gray.100"}
                    >
                      <Image mx={"auto"} pt={2} src={google}></Image>
                    </Box>
                    <Box
                      border={"1px"}
                      borderRadius={"28px"}
                      height={"35px"}
                      width={"72px"}
                      bg={"white"}
                      borderColor={"gray.100"}
                    >
                      <Image mx={"auto"} pt={2} src={github}></Image>
                    </Box>
                    <Box
                      border={"1px"}
                      borderRadius={"28px"}
                      height={"35px"}
                      width={"72px"}
                      bg={"white"}
                      borderColor={"gray.100"}
                    >
                      <Image mx={"auto"} pt={2} src={facebook}></Image>
                    </Box>
                  </Flex>
                  <Box textAlign={"center"}>
                    <Text>
                      Don't have account yet?{" "}
                      <Text
                        onClick={() => {
                          setRegister(true);
                          setLogin(false);
                        }}
                        as="u"
                        color={"orange.400"}
                        cursor="pointer"
                      >
                        Register
                      </Text>
                    </Text>
                  </Box>
                </VStack>
              </Box>
              <Box>
                <Image src={loginimage}></Image>
              </Box>
            </SimpleGrid>

            {/* <Lorem count={2} /> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
