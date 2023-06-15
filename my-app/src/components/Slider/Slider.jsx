import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const MySlider = () => {
  const sliderRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7140/slider')
      .then(response => response.json())
      .then(data => {
        setSliderData(data);
      })
      .catch(error => {
        console.error('API request error:', error);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);
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




  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleMenuToggle = (menuName) => {
    setActiveMenu(menuName === activeMenu ? null : menuName);
  };

  return (
    <div className='container-fluid'>
      <div className="slider-wrapper">
      <Slider {...settings} ref={sliderRef}>
          {sliderData.map(slider => (
            <div key={slider.id}>
            <img className='w-100' src={`${slider.imageUrl}`} alt={slider.id} />
            </div>
          ))}
        </Slider>
        <div className="navbar">
          <div className='container'>
            <nav>
              <ul>
                <li>
                  <a onMouseEnter={() => handleMenuToggle('akademiya')} onMouseLeave={() => handleMenuToggle('akademiya')}>
                  <Link  style={{textDecoration:"none"}} to="/about">
                    Akademiya
                    </Link>
                    {activeMenu === 'akademiya' && (
                      <div className="dropdown-menu">
                        <ul>
                          <li>
                          <Link  style={{textDecoration:"none"}} to="/about">
                            Haqqımızda
                            </Link>
                          </li>
                          <li>
                              <Link to="/akademi">
                              Akademik Partnyorlar</Link>
                          </li>
                          <li>
                          <Link  style={{textDecoration:"none"}} to="/karyera">
                            Karyera və Talant Mərkəzi
                            </Link>
                          </li>
                          <li>
                          <Link to="/education">
                            Təhsil Modeli
                           </Link>
                          </li>
                          <li>
                          <Link style={{textDecoration:"none"}}  to="/graduant">
                          Məzunlarımız
                           </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </a>
                </li>
                <li>
                <a onMouseEnter={() => handleMenuToggle('tedris')} onMouseLeave={() => handleMenuToggle('tedris')}>
                    Tədris sahələri
                    {activeMenu === 'tedris' && (
                      <div className="dropdown-menu">
                        <ul>
                        {modeData.map((item) => (
                             <li>
                          <Link key={item.id} style={{textDecoration: "none"}} to={`/profession/${item.id}`}>

                              {item.name}
                               </Link>
                             </li>
                        ))}
                        </ul>
                      </div>
                    )}
                  </a>
                </li>
                <li>
                  <Link to="/corporativ">

                    Korporativ
                    </Link>
              
             
                </li>
                <li>
                  <Link to="/contact">
                   Əlaqə
                   </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='logo'>
        <Link to="/">
           <img  src='/images/logofoot.png'/>
           </Link>
        </div>
      </div>
    </div>
  );
};

export default MySlider;
