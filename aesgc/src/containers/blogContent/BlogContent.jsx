// import React from "react";
import "./blogContent.css";
import dataPosts from "../../constants/datPost";
import { FaList } from "react-icons/fa";

const BlogContent = ({ setShowBlogMenu }) => {
  return (
    <div className="app__blogContent">
      <span onClick={() => setShowBlogMenu(true)} className="show-aside-post">
        <FaList color="#03a9f4" size={24} />
      </span>
      {dataPosts.map((post, index) => {
        return (
          <div key={index} className="app__blogContent-container">
            <h2 className="post-title">{post.title}</h2>
            <div className="post-image">
              <img src={post.img[0]} alt="photo" />
              <img src={post.img[1]} alt="photo" />
            </div>
            <p className="post-text">{post.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogContent;
