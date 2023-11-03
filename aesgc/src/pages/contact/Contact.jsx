import React from "react";
import { Footer, Navbar } from "../../components";
import images from "../../constants/images";
import { ContactForm } from "../../containers";

const Contact = () => {
  return (
    <div>
      <Navbar title="Contact" image1={images.aesgc} image2={images.aesgc} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
