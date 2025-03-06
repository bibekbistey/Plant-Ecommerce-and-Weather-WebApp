import { Grid, Spinner, Stack } from "@chakra-ui/react";
import { CartApi, useCartDeleteMutation } from "../../api/Cart";
import CartComponent from "./CartComponent";
import { useEffect, useState } from "react";
import { useCartCountStore } from "../../store/cartstore";

const CartDetails = () => {
  const { data: CartData, isLoading } = CartApi();
  const { setCount } = useCartCountStore();
  useEffect(() => {
    if (CartData) {
      const cartItemCount = CartData.data.length;
      setCount(cartItemCount);
    }
  }, [CartData]);

  const { mutate: DeleteCart, isPending } = useCartDeleteMutation();

  if (isLoading || isPending) {
    return (
      <Grid placeItems={"center"} height={"1000px"}>
        <Spinner />;
      </Grid>
    );
  }

  const handleDelete = (id) => {
    DeleteCart(id);
  };

  // const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   if (CartData) {
  //     setCartItems(CartData?.data);
  //   }
  // }, [CartData]);

  // const handleDelete = (id) => {
  //   setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  // };

  return (
    <Stack gap={5} mx={"10px"} mb={5}>
      {CartData?.data?.map((cart, index) => {
        return (
          <Stack key={index}>
            <CartComponent
              name={cart.name}
              description={cart.description}
              image={cart.image}
              price={cart.price}
              quantity={cart.quantity}
              onClickDelete={() => {
                handleDelete(cart.id);
              }}
            />
          </Stack>
        );
      })}
    </Stack>
  );
};

export default CartDetails;
