import React from "react";
import "./blogSideBar.css";
import { FaTimes } from "react-icons/fa";

const BlogSideBar = ({ showBlogMenu, setShowBlogMenu }) => {
  return (
    <aside
      className={
        showBlogMenu ? "app__blogSideBar active-aside" : "app__blogSideBar"
      }
    >
      <div onClick={() => setShowBlogMenu(false)} className="post-close-btn">
        <FaTimes color="#000" size={24} />
      </div>
      <div className="app__blogSideBar-wrapper">
        <div className="wrapper-input">
          <input type="text" placeholder="Chercher" />
          <button className="search-btn">Chercher</button>
        </div>
        <div className="wrapper-categories">
          <h2>Cathegories</h2>
        </div>
      </div>
    </aside>
  );
};

export default BlogSideBar;
