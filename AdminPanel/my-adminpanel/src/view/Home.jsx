import React from "react";
import { useNavigate } from "react-router-dom";
import HeaderNavbar from "../components/Header/HeaderNavbar";
import Navbar from "../components/Navbar/Navbar";

function Home() {
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
    </>
  );
}

export default Home;
