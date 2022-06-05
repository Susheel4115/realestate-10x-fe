import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./CSS-property/SignIn.css";
import eye from "../images/eye.png";
import axios from "./axios-configure";

function Signin({ setUser }) {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    try {
      const res = await axios.post(
        `https://realestate-10x-be.herokuapp.com/login/`,
        data,
        {
          withCredentials: true,
        }
      );

      console.log(res.data);

      if (res.data.status === "sucess") {
        localStorage.setItem("token", res.data.token);
        setUser({
          UserID: res.data.UserID,
          UserName: res.data.UserName,
        });

        localStorage.setItem("UserID", res.data.UserID);
        localStorage.setItem("UserName", res.data.UserName);

        navigate("/property");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <div className="sign-in-parent">
      <div className="sign-in-form-container">
        <h1 style={{ color: "#4c57b6" }}>Logo</h1>
        <p className="description">
          Enter your credentials to access your Account
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="UserID"
            id="email"
            placeholder="Mail ID"
            name="UserID"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            id="password"
            name="password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="eye"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            <img src={eye} alt="no data" />
          </span>
          <button type="submit" className="submit-button">
            Sign in
          </button>
          <Link to="/Signup" style={{ fontWeight: "bold" }}>
            {" "}
            <p id="signup">SignUp</p>
          </Link>
        </form>
      </div>
      <div>
        <p className="para">
          Don't have an account?
          <Link to="/Signup" style={{ fontWeight: "bold" }}>
            {" "}
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Signin;
