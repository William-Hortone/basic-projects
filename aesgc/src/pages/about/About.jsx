import { Footer, Navbar } from "../../components";
import images from "../../constants/images";
import { Description, Team } from "../../containers";

const About = () => {
  return (
    <div className="app__about">
      <Navbar title="A Propos" image1={images.img19} image2={images.img17} />
      <Description />
      <Team />
      <Footer />
    </div>
  );
};

export default About;
