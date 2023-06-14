import React from "react";
import "./_Second.scss";
import TypeOfEducation from "./TypeofEducation";

function Second() {
  return (
    <section id="second">
      <div className="container">
        <div className="row gx-0">
          <div className="col-lg-6">
            <TypeOfEducation
              title="Fərdi"
              text="Code Academy-də keçirilən Proqramlaşdırma üzrə tədris proqramı sektorun ehtiyaclarını nəzərə alaraq hazırlanmışdır..."
            />
          </div>
          <div className="col-lg-6">
            <TypeOfEducation
              title="Korporativ"
              text="Digital transformasiya dövründə xidmətlərin sürətli, təhlükəsiz və davamlı şəkildə göstərilməsini təmin edən peşəkar.."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Second;
