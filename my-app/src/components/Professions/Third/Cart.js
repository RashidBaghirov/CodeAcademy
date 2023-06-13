import React from "react";
import { Link } from "react-router-dom";

function Cart({ educationName, title, text, day, id }) {
  return (
    <div className="cart">
      <div className="name">
        <span>{educationName}</span>
      </div>
      <div className="title">
        <h2>{title}​</h2>
      </div>
      <div className="text">
        <p>{text.substring(0, 200) + "..."}</p>
      </div>
      <div className="button">
      <Link
  style={{ textDecoration: "none" }}
  to={{
    pathname: "/professiondetail",
    search: `?id=${id}`,
  }}
>
  Ətraflı
</Link>
      </div>
      <div className="day">
        <span>{day}| OnSite | InClass</span>
      </div>
    </div>
  );
}

export default Cart;
