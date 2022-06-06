import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../component/CSS-property/SignUp.css";
import axios from "axios";
import eye from "../images/eye.png";
function Signup() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return alert("Password doesn't match");
    const data = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
      UserID: parseInt(Math.random() * 10000),
      //       email: e.target.elements.email.value,
      //       password: e.target.elements.password.value,
      //       UserID: parseInt(Math.random() * 100000),
    };
    console.log(data);
    try {
      const res = await axios.post(
        `https://realestate-10x-be.herokuapp.com/Signup/`,
        data
      );
      console.log(res);
      navigate("/Signin");
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <div className="sign-up-parent">
      <div className="sign-up-form-container">
        <h1 style={{ color: "#4c57b6" }}>Logo</h1>
        <p>Create New Account</p>
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
          <input
            className="confirm-password"
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </form>
      </div>
      {/* <Link to="/signin">
        <h3>Sign In</h3>
      </Link> */}
    </div>
  );
}
export default Signup;
