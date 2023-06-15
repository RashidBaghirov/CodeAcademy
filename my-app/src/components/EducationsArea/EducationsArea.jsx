import React,{useRef,useState,useEffect} from "react";
import "./_EducationsArea.scss";

function EducationsArea() {
  const modeRef = useRef(null);
  const [modeData, setModeData] = useState([]);

  useEffect(()=>{
    fetch( 'https://localhost:7140/mode')
    .then(response=>response.json())
    .then(data=>{
      setModeData(data)
    })
    .catch(error => {
      console.error('API request error:', error);
    });
    
  },[])
  return (
    <section id="educations">
      <div className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 ">
              <div className="left ">
                <div className="titles">
                  <div className="first">
                    <h2>tədris</h2>
                  </div>
                  <div className="second">
                    <h2>sahələri</h2>
                  </div>
                </div>
                <div className="border_edu">
                  <div className="line"></div>
                </div>
                <div className="text">
                  <p>
                  İnformasiya Texnologiyaları sahəsində bugünün və <br/> gələcəyin ən tələb edilən istiqamətləri
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
            <div className="row">
  {modeData.map((item) => (
    <div className="col-lg-6" key={item.id}>
      <div className="edu_category">
        <div className="images">
          <img src={item.imageUrl} alt={item.name} />
        </div>
        <div className="edu_title">
          <h4>{item.name}</h4>
        </div>
      </div>
    </div>
  ))}
</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationsArea;
