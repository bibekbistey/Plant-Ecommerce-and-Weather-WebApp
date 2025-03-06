import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const ProductsApi = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/products");
      return response.data;
    },
  });
};
