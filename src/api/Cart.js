import { useToast } from "@chakra-ui/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const CartApi = () => {
  return useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/cart");
      return response;
    },
  });
};

export const useCartMutation = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: (data) => {
      axios.post("http://localhost:3000/cart", data);
    },
    onSuccess: () => {
      toast({
        title: "Product Added",

        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom-right",
      });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};

export const useCartDeleteMutation = () => {
  const queryClient = useQueryClient();
  const toast = useToast();

  return useMutation({
    mutationFn: async (id) => {
      await axios.delete(`http://localhost:3000/cart/${id}`);
    },
    onSuccess: () => {
      toast({
        title: "Product Deleted",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom-right",
      });
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
