import React from "react";
import './_First.scss';

function First(){
    return(
        <section id="first">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="title">
                        <h1>
                            Digital Marketinq
                        </h1>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="text-image">
                        <div className="image">
                            <img src="https://code.edu.az/wp-content/uploads/2021/07/sep-line.png" alt="" />
                        </div>
                        <div className="text">
                            <p>
                                Onlayn marketinq olaraq da adlandırılan Digital Marketinq potensial alıcı ilə əlaqə
                                qura bilmək üçün internet və digər rəqəmsal kommunikasiya (rabitə) metodlarından
                                istifadə edərək marketinq fəalliyyətini həyata keçirmə prosesidir. Onlayn kanallara
                                yalnız email, sosial media və display reklamlar deyil həmçinin, mətn və multimediya
                                mesajları da daxildir. Mahiyyətcə, hər hansı bir marektinq kampaniyası rəqəmsal
                                ünsiyyəti özündə əhatə edirsə, bu digital marketinqdir.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default First;