import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AllHeader from "../components/AllHeader/AllHeader";
import Detail from "../components/ProfessionDetail/Detail";

function ProfessionDetail() {
  const { id } = useParams();
  console.log(id)
  return (
    <div className="App">
      <Header />
      <AllHeader />
      <Detail id={id} />
      <Footer />
    </div>
  );
}

export default ProfessionDetail;
