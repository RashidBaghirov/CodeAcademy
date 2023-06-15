import React from "react";

function TypeOfEducation({ title, text }) {
  return (
    <div className="firstCart">
      <div className="title_PRo">
        <h2>{title}</h2>
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
      <div className="button">
        <a href="">Ətraflı</a>
      </div>
    </div>
  );
}

export default TypeOfEducation;
