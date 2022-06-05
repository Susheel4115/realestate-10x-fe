import axios from "axios";

const app = axios.create({
  baseURL: "https://realestate-10x-be.herokuapp.com/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
  },
  withCredentials: true,
});

export default app;
