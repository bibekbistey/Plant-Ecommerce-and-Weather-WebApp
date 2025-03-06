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

import { facebook, github, google, loginimage, logo } from "../assets";
import { useLoginModalStore, useRegisterModalStore } from "../store/loginStore";

const Register = () => {
  const { openRegister, setRegister } = useRegisterModalStore();
  const { setLogin } = useLoginModalStore();

  return (
    <>
      <Modal
        size={"5xl"}
        isOpen={openRegister}
        onClose={() => setRegister(false)}
      >
        <ModalOverlay />
        <ModalContent
          height={"fit-content"}
          p={5}
          bg={"#252D23"}
          color={"white"}
        >
          <ModalHeader>
            <Flex justifyContent={"end"} px={5} alignItems={"center"} gap={2}>
              <Image height={"48px"} width={"48px"} src={logo}></Image>
              <Text mt={3}>Register</Text>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid columns={2}>
              <Box>
                <Image src={loginimage}></Image>
              </Box>
              <Box p={5}>
                <Stack mb={3}>
                  <Text>Email </Text>
                  <Input type="text" placeholder="Enter your email"></Input>
                </Stack>
                <Stack mb={3}>
                  <Text>Fullname</Text>
                  <Input type="text" placeholder="Enter your Fullname"></Input>
                </Stack>
                <Stack>
                  <Text>Password</Text>
                  <Input type="text" placeholder="Enter your password"></Input>
                </Stack>

                <VStack gap={5}>
                  <Button
                    _hover={"null"}
                    color={"white"}
                    bg={"#F25019"}
                    mt={10}
                    width={"full"}
                  >
                    SignUp
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
                      Already have an account?{" "}
                      <Text
                        onClick={() => {
                          setLogin(true);
                          setRegister(false);
                        }}
                        as="u"
                        color={"orange.400"}
                        cursor="pointer"
                      >
                        Login
                      </Text>
                    </Text>
                  </Box>
                </VStack>
              </Box>
            </SimpleGrid>

            {/* <Lorem count={2} /> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Register;
