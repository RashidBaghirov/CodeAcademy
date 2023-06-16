import React from "react";
import { Link } from "react-router-dom";

function Teacher({ image, fullname,id }) {
  return (
  
    <div className="images col-lg-4">
      <div className="image">
      <Link style={{textDecoration:"none"}}  to={`/teacher/${id}`} className="teacher_href">
        <img src={image} alt="" />
  </Link>

      </div>
      <div className="name">
        <h2>{fullname}</h2>
      </div>
    </div>
  );
}

export default Teacher;
