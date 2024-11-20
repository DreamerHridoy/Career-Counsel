import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";

const HomeLayout = () => {
  return (
    <div>
      <nav>
        <NavBar></NavBar>
      </nav>
      <main>
        <Home></Home>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
