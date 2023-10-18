import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "./Utils";

const User = () => {
  const user = useSelector((state) => state.userReducer);

  console.log(user);
  return (
    <div className="user-container">
      <div className="user">
        <h3>{!isEmpty(user) && user.pseudo}</h3>
        <img src="./img/bill-gates.png" alt="bill gates" />
        <p>Age : {!isEmpty(user) && user.age} </p>
        <p>
          Like{!isEmpty(user) && user.likes > 1 ? "s" : ""} :
          {!isEmpty(user) && user.likes}
        </p>
      </div>
    </div>
  );
};

export default User;
