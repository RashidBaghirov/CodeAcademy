import React from "react";
import Process from "./Process";
import "./_Sixth.scss";


function Sixth(){
    const process=[
        {
            image:"https://code.edu.az/wp-content/uploads/2021/08/muraciet.png",
            title:" Onlayn müraciət et",
            text:"Saytımızdan onlayn formu dolduraraq Proqram Məsləhətçisi ilə görüş təyin et."
        },
        {
            image:"https://code.edu.az/wp-content/uploads/2021/08/proqram-meslehet.png",
            title:"Proqram Məsləhətçisi ilə görüş",
            text:"Görüş zamanı akademiyada tədris şəraiti ilə əyani tanış ol, şərtlər haqqında detallı məlumat al və mütəxəssis ilə görüşüb suallarına cavab tap."
        },
        {
            image:"https://code.edu.az/wp-content/uploads/2021/08/odenis-novu.png",
            title:"Ödəniş növü və dərs vaxtını seç",
            text:" Seçimlərinə bağlı olaraq tədrisin müddəti və qrafiki ilə tanış ol, qiymətini öyrən."
        },
        {
            image:"https://code.edu.az/wp-content/uploads/2021/08/imtahan.png",
            title:"İmtahanda iştirak et",
            text:"İmtahan zamanı bugünə kimi olan komputer və ingilis dili biliklərin yoxlanılacaq. Uyğun balı topla və birbaşa tədrisə keç."
        },
        {
            image:"https://code.edu.az/wp-content/uploads/2021/08/qeydiyyat.png",
            title:"Qeydiyyatdan keç",
            text:"Özünüzə uyğun ödəniş növünü seçərək qeydiyyat sənədlərini tamamla."
        }
    ]
    return(
        <section id="intro">
        <div className="container">
            <div className="row">
                <div className="title-text">
                    <div className="title">
                        <h2 className="upper">
                            qəbul
                        </h2>
                        <h2 className="bottom">
                            prosesimiz
                        </h2>
                    </div>
                    <div className="text">
                        <p>
                            Qəbul prosesimiz aşağıdakı addımlardan ibarətdir. Biz təkcə tələbələri qəbul etmirik. Akademiyamızda hüquqşünas, rəssam, mühasib, bioloq və bir çox fərqli sahələrdən olan şəxsləri bir araya toplayan zəngin bir təhsil mühiti yaratmışıq. Karyeranızı bizimlə birgə dəyişmək üçün istəkli olmağınız kifayətdir.
                        </p>
                    </div>
                </div>
                <ul>
                    <div className="row">
                    {process.map((item) => (
                  <Process image={item.image} title={item.title} text={item.text} />
                ))}

                    </div>

                </ul>
            </div>
        </div>
    </section>
    );
    }


    export default Sixth;