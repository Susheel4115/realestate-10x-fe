import React, { useState } from "react";
import SearchBAr from "./SearchBAr";
import SideBar from "./common/SideBar";
import Header from "./common/Header";
import DataTable from "./DataTable";
import "./CSS-property/userData.css";
import { useNavigate } from "react-router-dom";

const Property = ({ user, setToken, token }) => {
  const navigate = useNavigate();
  const [searchkey, setSearchKey] = useState("");
  if (!token) navigate("/");
  return (
    <div className="userData-container">
      <SideBar />
      <div className="right-side">
        <Header user={user} setToken={setToken} />
        <div className="rectangle"></div>
        <SearchBAr searchkey={searchkey} setSearchKey={setSearchKey} />
        <DataTable searchkey={searchkey} token={token} />
      </div>
    </div>
  );
};

export default Property;
