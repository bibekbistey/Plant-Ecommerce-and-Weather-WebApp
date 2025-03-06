import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Login />
      <Register />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
