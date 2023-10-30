import React from "react";
import { Footer, Header } from "../../components";
import { Introduction } from "../../containers";
const Home = () => {
  return (
    <div className="app__home">
      <Header />
      <Introduction />
      <Footer />
    </div>
  );
};

export default Home;
