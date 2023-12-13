import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  throw new Error("Page not Found");
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
