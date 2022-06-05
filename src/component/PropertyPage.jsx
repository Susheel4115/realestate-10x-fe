import React, { useState } from "react";
import SearchBAr from "./SearchBAr";
import SideBar from "./common/SideBar";
import Header from "./common/Header";
import DataTable from "./DataTable";
import "./CSS-property/userData.css";
import { useNavigate } from "react-router-dom";

const Property = ({user}) => {
  const navigate = useNavigate();
  const [searchkey, setSearchKey] = useState("");
  if(!localStorage.getItem("token"))  navigate("/")
  return (
    <div className="userData-container">
      <SideBar />
      <div className="right-side">
        <Header user={user} />
        <div className="rectangle"></div>
        <SearchBAr searchkey = {searchkey} setSearchKey={setSearchKey}/>
        <DataTable searchkey = {searchkey}/>
      </div>
    </div>
  );
};

export default Property;
