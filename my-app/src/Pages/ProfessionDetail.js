import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AllHeader from "../components/AllHeader/AllHeader";
import Detail from "../components/ProfessionDetail/Detail";

function ProfessionDetail() {
  return (
    <div className="App">
      <Header />
      <AllHeader />
      <Detail  />
      <Footer />
    </div>
  );
}

export default ProfessionDetail;
