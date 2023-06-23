import React from "react";
import HeaderNavbar from "../components/Header/HeaderNavbar";
import Navbar from "../components/Navbar/Navbar";

function Home() {
  const userRoles = ["Admin", "Superadmin"];
  
  const checkUserRole = () => {
    const userRole = "Admin"; 

    if (userRoles.includes(userRole)) {
      return true;
    } else {
      return false; 
    }
  };

  const isAuthorized = checkUserRole();
console.log(isAuthorized)
  return (
    <>
      {isAuthorized && (
        <>
          <HeaderNavbar />
          <Navbar />
        </>
      )}
    </>
  );
}

export default Home;
