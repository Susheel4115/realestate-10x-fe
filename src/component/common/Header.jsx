import React from "react";
import userIcon from "../../images/User_icon.png";
import "./header.css";
import down from "../../images/down.png";
import { useNavigate } from "react-router-dom";

//
//

const Header = ({ user }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/Signin");
  };

  return (
    <div className="header-container">
      <div className="header-id">USER ID: {"06PPD" + user.UserID} </div>
      <div className="logout">
        <img className="user" src={userIcon} alt="user" />

        <div className="username">{"   " + user.UserName}</div>

        <img
          className="down"
          src={down}
          alt="data"
          onClick={() => {
            if (window.confirm("Do you want to logout.!?")) {
              handleLogout();
            }
          }}
        />
      </div>
    </div>
  );
};

export default Header;
