import React from "react";
import "./_SecondSection.scss";


function TimelineItem({ imageSrc, date, text }) {
  return (
      <div className="optional">
        <div className="image">
          <img src={imageSrc} alt="" />
        </div>
        <div className="date">
          <span>{date}</span>
        </div>
        <div className="text">
          <p>{text}</p>
        </div>
      </div>
  );
}

export default TimelineItem;
