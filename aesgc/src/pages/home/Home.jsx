import React from "react";
import { Footer, Header } from "../../components";
import { Introduction, Sponsor, Websites } from "../../containers";
import "./home.css";

const Home = () => {
  return (
    <div className="app__home">
      <Header />
      <Introduction />
      <div className="app__home-websites">
        <h2>Sites Essentiels</h2>
        <Websites />
      </div>
      <div className="app__home-sponsor">{/* <Sponsor /> */}</div>
      <Footer />
    </div>
  );
};

export default Home;
