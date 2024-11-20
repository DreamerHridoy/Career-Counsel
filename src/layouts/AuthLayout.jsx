import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const AuthLayout = () => {
  return (
    <div>
      <header>
        <NavBar></NavBar>
      </header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default AuthLayout;
