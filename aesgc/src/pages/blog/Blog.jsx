import React from "react";
import "./blog.css";
import { Navbar } from "../../components";
import images from "../../constants/images";
import { BlogContainer } from "../../containers";

const Blog = () => {
  return (
    <div className="app__blog">
      <Navbar title="Notre Blog" image1={images.aesgc} image2={images.img25} />
      <BlogContainer />
    </div>
  );
};

export default Blog;
