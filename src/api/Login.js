import { useToast } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useLoginMutation = () => {
  const toast = useToast();
  return useMutation({
    mutationFn: (data) => {
      return axios.post("https://api.escuelajs.co/api/v1/auth/login", data);
    },
    onSuccess: (response) => {
      console.log(response);
      localStorage.setItem(
        "token",
        JSON.stringify(response.data.refresh_token)
      );
      toast({
        title: "Logged in Successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom-right",
      });
    },
    onError: (error) => {
      toast({
        title: error?.response?.data?.message || "Login failed",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom-right",
      });
    },
  });
};
