import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App.jsx";
import "./index.css";
import Layout from "./Layout.jsx";
import Homepage from "./pages/Homepage.jsx";
import Weather from "./pages/Weather.jsx";
import theme from "./assets/fonts/font.js";
import Product from "./pages/Product.jsx";
import Cartpage from "./pages/Cartpage.jsx";

const queryClient = new QueryClient();

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Homepage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/cart" element={<Cartpage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={route}>
          <App />
        </RouterProvider>
      </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>
);
