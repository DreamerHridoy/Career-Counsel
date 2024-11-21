import { Helmet } from "react-helmet-async";
import ServiceSection from "../components/ServiceSection";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - My Website</title>
      </Helmet>

      <Slider></Slider>
      <ServiceSection></ServiceSection>
    </div>
  );
};

export default Home;
