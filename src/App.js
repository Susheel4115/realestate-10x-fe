// import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Basic from "./component/forms/basicinfo/Basic";
import Basic from "./component/forms/basicinfo/Basic";
import Property from "./component/PropertyPage";
import Signin from "./component/SignIn";
import Signup from "./component/SignUp";
import Propertypage from "./component/forms/propertydetails/Property";
import Location from "./component/forms/Location_info/Location";
import General from "./component/forms/General_info/General";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    UserID: localStorage.getItem("UserID"),
    UserName: localStorage.getItem("UserName"),
  });
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [data, setData] = useState({
    PPID: "NA",
    Property: "NA",
    Area: "na",
    Contact: "na",
    Views: "na",
    Duration: "na",
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={<Signin setUser={setUser} setToken={setToken} />}
        />
        {/* login page */}
        <Route path="/SignUp" setToken={setToken} element={<Signup />} />
        {/* registration page */}
        <Route
          path="/Property"
          element={<Property user={user} setToken={setToken} token={token} />}
        />
        {/* property page */}

        <Route
          path="/Basic"
          element={
            <Basic
              user={user}
              setToken={setToken}
              data={data}
              setData={setData}
            />
          }
        />
        <Route
          path="/PropertyDetails"
          element={
            <Propertypage
              user={user}
              setToken={setToken}
              data={data}
              setData={setData}
            />
          }
        />
        <Route
          path="/General"
          element={
            <General
              user={user}
              setToken={setToken}
              data={data}
              setData={setData}
            />
          }
        />
        <Route
          path="/location"
          element={
            <Location
              user={user}
              setToken={setToken}
              data={data}
              token={token}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
