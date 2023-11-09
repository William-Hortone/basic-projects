import React from "react";
import "./blogContainer.css";
import { BlogContent, BlogSideBar } from "../../containers";
// import BlogSideBar from "../blogSideBar/BlogSideBar";

const BlogContainer = () => {
  return (
    <div className="app__blogContainer">
      <div className="app__blogContainer-wrapper">
        <BlogContent />
        <BlogSideBar />
      </div>
    </div>
  );
};

export default BlogContainer;
