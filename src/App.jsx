import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import Employee from "./components/Dashboard/Employee";
import Admin from "./components/Dashboard/Admin";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

function App() {
  // useEffect(() => {
  //   // setLocalStorage();
  //   getLocalStorage();
  // }, []);

  const [User, setUser] = useState(null);
  const [logedinUser, setlogedinUser] = useState(null);
  const [UserData,setUserData] = useContext(AuthContext);
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData);
      setlogedinUser(userData?.data || null);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      const admin = { role: "admin" };
      setUser(admin);
      setlogedinUser(admin);
      localStorage.setItem("loggedInUser", JSON.stringify(admin));
    } else if (UserData) {
      const employee = UserData.find(
        (e) => email === e.email && password === e.password
      );

      if (employee) {
        const employeeData = { role: "employee", data: employee };
        setUser(employeeData);
        setlogedinUser(employee);
        localStorage.setItem("loggedInUser", JSON.stringify(employeeData));
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  };
console.log(UserData);

  return (
    <>
      {!User ? <Login handleLogin={handleLogin} /> : null}
      {User?.role === "employee" && <Employee changeUser={setUser}  data={logedinUser} />}
      {User?.role === "admin" && <Admin changeUser={setUser} />}{" "}
    </>
  );
}

export default App;
