import React from "react";
import "./_FifthSection.scss";

function FifthSection() {
  return (

    <section id="reviews">
        <div className="container">
            <div className="row">
                <div className="firstCart col-lg-6">
                    <div className="cartText">
                        <div className="titleCart">
                            <strong>
                                Paşa Bank
                            </strong>
                        </div>
                        <div className="textCart">
                            <p>

                                "Belə bir müqayisə edə bilərəm ki, adətən Paşa Banka müraciət edən az təcrübəli bir kandidatla müsahibə aparıb işə götürəndən sonra həmin işçinin tam olaraq komandalara adaptasiyası və texnologiyanı öyrənməsi təxminən 2-3 ay vaxt aparır. Amma Bootcamp məzunlarına artıq maksimum 2 həftə vaxt lazım olacağı görülür. Bu da düşünürəm ki, həm bank üçün, həm də Code Academy üçün çox sevindirici bir haldır". 
                            </p>
                        </div>
                    </div>
                    <div className="emptyDiv">

                    </div>
                    <div className="person">
                        <div className="image">
                            <img src="https://code.edu.az/wp-content/uploads/2021/09/shamil-ferecullayev.jpg" alt="" />
                        </div>
                        <div className="name-work">
                            <div className="name">
                                <span>
                                    Şamil Fərəcullayev
                                </span>
                            </div>
                            <div className="work">
                                <span>
                                    Rəqəmsal mühəndislik şöbəsinin müdiri
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="secondCart col-lg-6">
                    <div className="cartText">
                        <div className="titleCart">
                            <strong>
                                Havas Group Azerbaijan
                            </strong>
                        </div>
                        <div className="textCart">
                            <p>

                                "Code Academy ilə olan uğurlu korporativ əməkdaşlığımız nəticəsində sıfırdan digital marketinq komandası qurmağa nail olduq və beləcə Havas yalnız ənənəvi deyil həm də digital həllər təklif edən aparıcı şirkətlərdən birinə çevrildi". 
                            </p>
                        </div>
                    </div>
                    <div className="emptyDiv">

                    </div>
                    <div className="person">
                        <div className="image">
                            <img src="https://code.edu.az/wp-content/uploads/2021/10/zaur-ismayilov-havas.jpeg" alt="" />
                        </div>
                        <div className="name-work">
                            <div className="name">
                                <span>
                                    Zaur İsmayılov
                                </span>
                            </div>
                            <div className="work">
                                <span>
                                    Direktor
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default FifthSection;
