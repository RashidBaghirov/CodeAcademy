import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AllHeader from "../components/AllHeader/AllHeader";
import First from "../components/ProfessionDetail/First/First";
import Second from "../components/ProfessionDetail/Second/Second";
import Third from "../components/ProfessionDetail/Third/Third";
import Fourth from "../components/ProfessionDetail/Fourth/Fourth";
import Fifth from "../components/ProfessionDetail/Fifth/Fifth";
import Sixth from "../components/ProfessionDetail/Sixth/Sixth";
import Seventh from "../components/ProfessionDetail/Seventh/Seventh";
import Eighth from "../components/ProfessionDetail/Eighth/Eighth";

function ProfessionDetail() {
  return (
  <>
    <div className="App">
      <Header />
      <AllHeader />
      <First  />
      <Second  />
      <Third  />
      <Fourth  />
      <Fifth  />
      <Sixth  />
      <Seventh  />
      <Eighth  />
      <Footer />
    </div>
  </>
  );
}

export default ProfessionDetail;
