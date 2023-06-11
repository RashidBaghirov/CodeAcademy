import React from "react";

function Comp({ imageSrc, title, description }) {
  return (
    <div className="comp">
      <div className="images">
        <img src={imageSrc} alt="Resim" />
      </div>
      <div className="titles">
        <div className="titles_h5">
          <h5>{title}</h5>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Comp;