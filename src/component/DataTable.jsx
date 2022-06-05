// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./CSS-property/userData.css";
import Toggle from "./Toggle";

const url = "https://realestate-10x-be.herokuapp.com/property";

const DataTable = ({ searchkey }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  // const [status,setStatus]=useState("")

  async function getData() {
    try {
      const jsonRes = await fetch(url, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      const res = await jsonRes.json();
      if (res.status === "sucess") {
        setData(res.data);
      } else {
        navigate("/Signin");
      }

      console.log(res);
    } catch (error) {
      navigate("/Signin");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const dataone = data.filter((Element) => Element.PPID.includes(searchkey));

  return (
    <>
      <div className="datatable-container">
        <div className="heading">
          <div className="table-heading ppid">PPID</div>
          <div className="table-heading iamges">Image</div>
          <div className="table-heading property">Property</div>
          <div className="table-heading contact">Conatct</div>
          <div className="table-heading area">Area</div>
          <div className="table-heading views">Views</div>
          <div className="table-heading status">Status</div>
          <div className="table-heading days">Day's Left</div>
          <div className="table-heading action">Action</div>
        </div>
        <div className="rowdata">
          {dataone.map((obj, idx) => (
            <Toggle key={idx} obj={obj} getData={getData} />
          ))}
        </div>
        {/* <table>
          <thead>
            <tr>
              <th className="table-head ppdid" id="ppdid">
                PPD ID
              </th>
              <th className="table-head image-head" id="image">
                Image
              </th>
              <th className="table-head" id="property">
                Property
              </th>
              <th className="table-head" id="contact">
                Contact
              </th>
              <th className="table-head" id="area">
                Area
              </th>
              <th className="table-head" id="views">
                Views
              </th>
              <th className="table-head" id="status">
                Status
              </th>
              <th className="table-head" id="days">
                Days left
              </th>
              <th className="table-head" id="action">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {dataone.map((obj, idx) => (
              <Toggle key={idx} obj={obj} getData={getData} />
            ))}
          </tbody>
        </table>

        </Table> */}
      </div>
    </>
  );
};

export default DataTable;
