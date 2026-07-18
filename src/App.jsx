import { useState, useEffect, useRef } from "react";
import Login from "./components/auth/Login";
import EmployeeDashBoard from "./components/Dashboard/EmployeeDashBoard";
import AdminDashBoard from "./components/Dashboard/AdminDashBoard";
import { getLocalStorage, setLocalStorage } from "./util/localStorage";
import useAuthStore from "./store/authUser";

export  function App() {
  useEffect(() => {
  setLocalStorage();
}, []);

const { employees, admin } = getLocalStorage();
const {userType,setUserType,setLoggedInEmployee}=useAuthStore();
  

const handleLogin = (email, password) => {
  if (email === "admin@me.com" && password === "123") {
    setUserType("admin");
  } else {
    const employee = employees.find(
  (emp) =>
    emp.email === email &&
    emp.password === password
);
    if (employee) {
  setUserType("employee");
  setLoggedInEmployee(employee);
} else {
      alert("Invalid Credentials");
    }
  }
};

   return (
   <>
   {!userType ? <Login handleLogin={handleLogin}/>:''}
  {userType === "admin" && (
        <AdminDashBoard
          changeUser={setUser}
          data={employees}
        />
      )}

    {userType === "employee" && <EmployeeDashBoard />}
   </>
);
}
