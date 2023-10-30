import { Footer, Navbar } from "../../components";
import images from "../../constants/images";
import { Description, Team } from "../../containers";

const About = () => {
  return (
    <div className="app__about">
      <Navbar title="A Propos" image1={images.aesgc} image2={images.aesgc} />
      <Description />
      <Team />
      <Footer />
    </div>
  );
};

export default About;
