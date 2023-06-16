import React,{useRef,useState,useEffect} from "react";
import "./_Second.scss";
import Story from "./Story";

function Second() {
  const [graduantData, setgraduantData] = useState([]);

  useEffect(()=>{
    fetch( 'https://localhost:7140/graduant')
    .then(response=>response.json())
    .then(data=>{
      setgraduantData(data)
    })
    .catch(error => {
      console.error('API request error:', error);
    });
    
  },[])
  return (
    <section id="second">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-5">
            <div className="title">
              <h4>hekayələr</h4>
            </div>
          </div>
         
          <div className="col-lg-12 p-5 text-center">
            <div className="row">
              {graduantData.map((data)=>(
                  <Story
                  image={data.image}
                  fullname={`${data.name} ${data.surName}`}
                  company={data.company}
                  id={data.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Second;
