import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderNavbar from "../components/Header/HeaderNavbar";
import Navbar from "../components/Navbar/Navbar";
import Request from "../components/AllRequest/Request";
function Requests() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  if (!token) {
    navigate("/");
    return null; 
  }
  return (
    <>
    <HeaderNavbar />
    <Navbar />
    <Request />

    </>
    

  )
}

export default Requests