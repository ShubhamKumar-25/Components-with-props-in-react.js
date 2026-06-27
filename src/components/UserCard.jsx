import React from "react";
// import myImg from "../assets/img.jpg";
import "./UserCard.css";

const UserCard = (props) => {
  return (
    <div className="user-container">
      <p id="user-name">{props.name}</p>
      <img id="user-img" src={props.img} alt="image" />
      <p id="user-decs">{props.desc}</p>
    </div>
  );
};

export default UserCard;
