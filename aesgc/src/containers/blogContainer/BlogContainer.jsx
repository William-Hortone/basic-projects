import React, { useState } from "react";
import "./blogContainer.css";
import { BlogContent, BlogSideBar } from "../../containers";
// import BlogSideBar from "../blogSideBar/BlogSideBar";

const BlogContainer = () => {
  const [showBlogMenu, setShowBlogMenu] = useState(false);

  return (
    <div className="app__blogContainer">
      <div className="app__blogContainer-wrapper">
        <BlogContent setShowBlogMenu={setShowBlogMenu} />
        <BlogSideBar
          setShowBlogMenu={setShowBlogMenu}
          showBlogMenu={showBlogMenu}
        />
      </div>
    </div>
  );
};

export default BlogContainer;
