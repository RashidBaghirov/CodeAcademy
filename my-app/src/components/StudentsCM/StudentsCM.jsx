import React,{useRef,useState,useEffect} from "react";
import "./_StudentsCM.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StudentsCM = () => {

  const [graduantData, setgraduantData] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7140/graduant")
      .then((response) => response.json())
      .then((data) => {
        setgraduantData(data);
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  }, []);
  console.log(graduantData);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
 
  return (
    <section id="studentsCM">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="titles d-flex justify-content-center">
              <h2>məzunlarımızın rəyləri</h2>
            </div>
          </div>
          <Slider {...settings}>
                {graduantData.map((data) => (
               <div className="m-4">
               <div className="studentsCM-students-text d-flex justify-content-center">
                 {data.sentence}
               </div>
               <div className="stu_name_and_img">
                 <div className="image">
                   <img src={data.image} alt={data.name} />
                 </div>
                 <div className="name_and_profession">
                   <span className="name">
                     {data.name} {data.surName}
                   </span>
                   <span className="profession">{data.position}</span>
                 </div>
               </div>
             </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default StudentsCM;
