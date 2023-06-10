import React from "react";
import './_ThirdSection.scss'


function ThirdSection (){
    return(
        <section id="aboutKorporativ">

        <div className="container">
            <div className="row">
                <div className="title">
                    <h2 className="first">
                        korporativ
                    </h2>
                    <h2 className="second">
                        üstünlüklərlə fərqlənin
                    </h2>
                </div>
                <div className="titleTextKar">
                    <p>
                        Şirkətlərin ehtiyaclarına uyğun olaraq korporativ tədris proqramlarımız sayəsində kadrların sıfırdan yetişdirilməsi ixtisaslaşdırılması və davamlı inkişafı mümkündür.
                    </p>
                </div>
    
                <div className="mainContentKorp">
                    <div className="row">
                        <ul className="col-lg-4">
                            <li>
                                <div className="imageAb">
                                    <img src="https://code.edu.az/wp-content/uploads/2022/04/tehsil-sertifikati.svg" alt="" />
                                </div>
                            </li>
                            <li style={{marginTop:'25px'}}>
                                <div className="titleMain">
                                    <h2>
                                        Təhsil Nazirliyi tərəfindən akkreditasiya olunmuş tədris
                                    </h2>
                                </div>
                            </li>
                            <li style={{marginTop: '15px'}}>
                                <div className="textMain" >
                                    <p>
                                        Code Academy Təhsil Nazirliyi tərəfindən akkreditasiya olunmuş ilk özəl tədris müəssisəsidir. Bu liseziya təhsilin keyfiyyəti nəzərə alınaraq təqdim olunur. 
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <ul className="col-lg-4">
                            <li>
                                <div className="imageAb">
                                    <img src="https://code.edu.az/wp-content/uploads/2022/04/ise-uygun-tedris-proqrami.svg" alt="" />
                                </div>
                            </li>
                            <li style={{marginTop: '15px'}}>
                                <div className="titleMain">
                                    <h2>
                                        İstəyə uyğun tədris proqramı
                                    </h2>
                                </div>
                            </li>
                            <li style={{marginTop: '15px'}}>
                                <div className="textMain" >
                                    <p>
                                        
                                            Tələblərə uyğunlaşdırılmış adaptiv, modular tədris proqramları təklif edirik. 
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <ul className="col-lg-4">
                            <li>
                                <div className="imageAb">
                                    <img src="https://code.edu.az/wp-content/uploads/2022/04/reqabetedavamlikadrlar.svg" alt="" />
                                </div>
                            </li>
                            <li style={{marginTop: '25px'}}>
                                <div className="titleMain">
                                    <h2>
                                        Rəqabətədavamlı kadrlar
                                    </h2>
                                </div>
                            </li>
                            <li style={{marginTop: '15px'}}>
                                <div className="textMain" >
                                    <p>
                                        
                                        Sektorunun tələblərinə uyğun olaraq qısamüddətli proqram ərzində lazımi bilik və bacarıqlara yiyələnən şəxslərin önündə geniş karyera imkanları açılacaq.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <ul className="col-lg-4">
                            <li>
                                <div className="imageAb">
                                    <img src="https://code.edu.az/wp-content/uploads/2022/04/beynelxalq-sertifikat-proqramlari.svg" alt=""/>
                                </div>
                            </li>
                            <li style={{marginTop: '25px'}}>
                                <div className="titleMain">
                                    <h2>
                                        Beynəlxalq sertifikat proqramları
                                    </h2>
                                </div>
                            </li>
                            <li style={{marginTop: '15px'}}>
                                <div className="textMain" >
                                    <p>
                                            Təlimləri uğurla başa vurduqda qlobal sertifikasiya proqramlarına qoşulma haqqını əldə edəcəksiniz. 
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default ThirdSection;