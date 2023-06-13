import React from "react";
import First from "./First/First";
import { AppContext } from "../../context/AppContext";

function Detail({ id }) {
  const { educationData } = React.useContext(AppContext);
  const selectedData = educationData.find((data) => data.id === id);
  console.log(id)
  if (!selectedData) {
    return <div>Veri bulunamadı</div>;
  }

  return (
    <First
      title={selectedData.title}
      text={selectedData.text}
    />
  );
}

export default Detail;
