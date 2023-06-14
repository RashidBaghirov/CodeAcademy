import React from "react";
import "./_SecondSection.scss";
import TimelineItem from "./TimeLineItem";

function SecondSection() {
  return (
    <section id="second">
      <div className="container">
        <div className="row">
          <div className="col-lg-6" style={{borderRight:'1px solid black'}}>
            <div className="row">
              <div className="col-12 d-flex justify-content-center ">
                <TimelineItem
                  imageSrc="https://code.edu.az/wp-content/uploads/2021/08/code-academy-history-1.jpeg"
                  date="2015"
                  text="1 tədris proqramı – 1 siniflə fəaliyyətə başladıq​"
                />
              </div>
              <div className="col-12 d-flex justify-content-center ">
                <TimelineItem
                  imageSrc="https://code.edu.az/wp-content/uploads/2021/08/code-academy-dmi-emekdasliq-1.jpg"
                  date="2017"
                  text="Microsoft Authorised Education Partner ilə əməkdaşlıq, tədris sahələri 6-ya çatdırıldı​. Microsoft Imagine Academy, AutoDesk, Digital Marketing Institute ilə akademik partnyorluqlar əldə etdik​"
                />
              </div>
              <div className="col-12 d-flex justify-content-center ">
                <TimelineItem
                  imageSrc="https://code.edu.az/wp-content/uploads/2021/08/onilne-campus-burada-1.jpeg"
                  date="2020"
                  text="COVID-19 pandemiyası səbəbilə evdə qaldıq, əllərimizi çoxlu su və sabunla yuduq və dərsləri Online Campus formatında keçməyə başladıq.​"
                />
              </div>
              <div className="col-12 d-flex justify-content-center ">
                <TimelineItem
                  imageSrc="https://code.edu.az/wp-content/uploads/2021/08/elave-tehsil-lisenziyasi-1.jpg"
                  date="2021"
                  text="Əlavə təhsil müəssisəsi kimi lisenziya qazandıq və Azərbaycan Respublikası Təhsil Nazirliyi ilə əməkdaşlıq etməyə başladıq.​"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6" >
            <div className="row">
              <div className="col-12 mt-5 d-flex justify-content-center ">
                <TimelineItem
                  imageSrc="https://code.edu.az/wp-content/uploads/2021/08/code-academy-history2-1.jpeg"
                  date="2016"
                  text="2 sinif otağımızdan 211 məzun verdik.​"
                />
              </div>
              <div className="col-12 mt-5 d-flex justify-content-center ">
                <TimelineItem
                  imageSrc="https://code.edu.az/wp-content/uploads/2021/08/code-academy-yeni-campus-1.jpg"
                  date="2018"
                  text="Code Academy Campus böyüdü. 10 sinif otağında dərs keçməyə başladıq.​"
                />
              </div>
              <div className="col-12 mt-5 d-flex justify-content-center ">
                <TimelineItem
                  imageSrc="https://code.edu.az/wp-content/uploads/2021/08/korporativ-telimlere-basladiq-1.jpg"
                  date="2019"
                  text="Korporativ təlimlər verməyə başladıq.​"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondSection;
