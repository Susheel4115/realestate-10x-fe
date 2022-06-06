import React, { useState } from "react";
import "./styles.css";
import SideBar from "../../common/SideBar";
import Header from "../../common/Header";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav";
const General = ({ user, data, setData, setToken }) => {
  const [contact, setConact] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(e.target.elements.contact.value);

    setData({ ...data, Contact: e.target.elements.contact.value });
    navigate("/location");
  };

  return (
    <div className="basic">
      <SideBar />
      <div className="headform">
        <Header user={user} setToken={setToken} />
        <div className="rectangle"></div>
        <Nav />
        <div className="main">
          <form action="" className="form-basic" onSubmit={handleSubmit}>
            <div className="form-data1">
              <div className="form-container">
                <h4>Name</h4>
                <select className="input" name="cars">
                  <option value="owner">owner</option>
                  <option value="saab">broker</option>
                </select>
                <h4>Posted by</h4>
                <select className="input" name="cars">
                  <option value="" disabled selected hidden>
                    posted by
                  </option>
                  <option value="saab">broker</option>
                  <option value="saab">owner</option>
                </select>
                <h4>Featured package</h4>
                <select
                  className="input"
                  name="cars"
                  placeholder="please select"
                >
                  <option value="volvo">10L</option>
                  <option value="saab">11L</option>
                  <option value="fiat">21L</option>
                  <option value="audi">31L</option>
                </select>
              </div>

              <div className="form-container1">
                <h4>Mobile</h4>
                <input
                  type="text"
                  id="contact"
                  required
                  value={contact}
                  onChange={(e) => setConact(e.target.value)}
                  placeholder="enter your mobile number"
                  className="input"
                />
                <h4>Sale type</h4>
                <select
                  className="input"
                  name="cars"
                  placeholder="please select"
                >
                  <option value="volvo">Installment</option>
                  <option value="saab">Emi</option>
                  <option value="fiat">single payment</option>
                </select>
                <h4>PPD package</h4>
                <select
                  className="input"
                  name="cars"
                  placeholder="please select"
                >
                  <option value="saab">3L</option>
                  <option value="fiat">4L</option>
                  <option value="fiat">5L</option>
                </select>
              </div>
            </div>

            <div className="button">
              <Link to="PropertyDetails">
                <button className="btn1 ">Previous</button>
              </Link>
              <button className="btn2">Save & continue</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default General;
