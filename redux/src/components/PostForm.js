import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, getPosts } from "../action/post.action";

const PostForm = () => {
  const form = useRef();
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      author: user.pseudo,
      title: form.current[0].value,
      content: form.current[1].value,
      likes: 0,
    };

    await dispatch(addPost(postData));
    dispatch(getPosts(postData));
    form.current.reset();
  };

  return (
    <div className="form-container">
      <form ref={form} onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="Titre du poste" />
        <textarea placeholder="Postez vos pensées..."></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;
