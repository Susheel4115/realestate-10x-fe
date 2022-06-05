import React, { useState } from "react";
import "./styles.css";
import SideBar from "../../common/SideBar";
import Header from "../../common/Header";
import { Link, useNavigate } from "react-router-dom";
import Nav from "./Nav";

const PropertyInput = ({ user, data, setData }) => {
  // const [area,setArea]=useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  //  const [Price,setPrice]=useState("")
  //  const [Type,setType]=useState("")
  const navigate = useNavigate();

  const calulate = (len, wid) => {
    // console.log(e);
    const length = parseInt(len);
    console.log(length);
    const width = parseInt(wid);
    const area = parseInt(length * width);
    // setArea(area)
    return area;
  };
  const handleSubmit = async (e) => {
    // e.preventDefault();
    console.log("data");

    const length=parseInt(e.target.elements.length.value);
    const width=parseInt(e.target.elements.width.value);
    const area=parseInt(length*width);
    console.log(area)
// =======
//     const length = parseInt(e.target.elements.length.value);
//     const width = parseInt(e.target.elements.width.value);
//     const area = parseInt(length * width);
// >>>>>>> d075d1ff51ecdd69819dd13b8a9a964318009ab3
    // setArea(area);
    setData({ ...data, Area: e.target.elements.area.value });
    navigate("/General");
  };

  return (
    <div className="basic">
      <SideBar />
      <div className="headform">
        <Header user={user} />
        <div className="rectangle"></div>

        <Nav />

        <div className="main">
          <form action="" className="form-basic" onSubmit={handleSubmit}>
            <div className="form-data1">
              <div className="form-container">
                <h4>Length</h4>
                <input
                  type="number"
                  id="length"
                  required
                  value={length}
                  onChange={(e) => {
                    setLength(e.target.value);
                  }}
                  className="input"
                  placeholder="Example: 1000"
                />
                <h4>Total Area</h4>
                <input
                  type="text"
                  id="area"
                  value={
                    String(calulate(length, width)) === String(NaN)
                      ? 0
                      : calulate(length, width)
                  }
                  placeholder="Example: 7500"
                  className="input"
                />
                <h4>No of BHK</h4>
                <select className="input" name="cars">
                  <option value="volvo">select no of BHK</option>
                  <option value="saab">1</option>
                  <option value="fiat">2</option>
                  <option value="audi">3</option>
                </select>
                <h4>Furnished</h4>
                <select className="input" name="onhf">
                  <option value="volvo">select Furnished</option>
                  <option value="saab">Yes</option>
                  <option value="fiat">No</option>
                </select>
                <h4>Lift</h4>
                <select className="input" name="hvgv">
                  <option value="volvo">select Furnished</option>
                  <option value="saab">Yes</option>
                  <option value="fiat">No</option>
                </select>{" "}
                <h4>Facing</h4>
                <select className="input" name="hffgv">
                  <option value="volvo">select Facing</option>
                  <option value="saab">Yes</option>
                  <option value="fiat">No</option>
                </select>
              </div>

              <div className="form-container1">
                <h4>Breadth</h4>
                <input
                  type="number"
                  id="width"
                  required
                  value={width}
                  onChange={(e) => {
                    setWidth(e.target.value);
                    // calulate(length,width)
                  }}
                  placeholder="Example: 1000"
                  className="input"
                />
                <h4>Area Unit</h4>
                <select className="input" name="ghgfgg">
                  <option value="volvo">Area Unit</option>
                  <option value="saab">Sq.m</option>
                  <option value="fiat">Sq.cms</option>
                </select>
                <h4>No of Floor</h4>
                <select className="input" name="hmgtff">
                  <option value="volvo">No of floors</option>
                  <option value="saab">3</option>
                  <option value="fiat">4</option>
                  <option value="fiat">5</option>
                </select>
                <h4>Western toilet</h4>
                <select className="input" name="hycgg">
                  <option value="saab">Western toilet</option>
                  <option value="fiat">Yes</option>
                  <option value="fiat">No</option>
                </select>
                <h4>Car Parking</h4>
                <select className="input" name="hytt">
                  <option value="saab">Car Parking</option>
                  <option value="fiat">Yes</option>
                  <option value="fiat">No</option>
                </select>
                <h4>Electricity</h4>
                <input
                  type="text"
                  id="electricity"
                  placeholder="Example: 3 phase"
                  className="input"
                />
              </div>
            </div>

            <div className="button">
              <Link to="/Basic">
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

export default PropertyInput;
