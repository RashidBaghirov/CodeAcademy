import React, { useContext } from "react";
import { AppContext } from "../../../context/AppContext";
import Cart from "./Cart";

function Third() {
  const { educationData } = useContext(AppContext);

  return (
    <section id="education">
      <div className="container">
        <div className="row">
          <div className="title">
            <h1>Digital Marketinq Tədris Proqramları</h1>
          </div>
          <form action="">
            <input type="radio" id="Hamısı" name="type_edu" />
            <label htmlFor="Hamısı">Hamısı</label>

            <input type="radio" id="Korporativ" name="type_edu" />
            <label htmlFor="Korporativ">Korporativ</label>

            <input type="radio" id="ferdi" name="type_edu" />
            <label htmlFor="ferdi">Fərdi</label>
          </form>

          {educationData.map((data) => (
            <div className="col-lg-12" key={data.title}>
              <Cart
                educationName={data.educationName}
                title={data.title}
                text={data.text}
                day={data.day}
                id={data.id}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Third;
