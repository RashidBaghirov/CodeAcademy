import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MySlider = () => {
  const sliderRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState(null);

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

  const settings = {
    dots: false,
    infinite: false,
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
          <div>
            <img className='w-100' src="/images/code-academy-bg.jpeg" alt="Slide 1" />
          </div>
          <div>
            <img className='w-100' src="/images/code-academy-bg.jpeg" alt="Slide 2" />
          </div>
          <div>
            <img className='w-100' src="/images/code-academy-bg.jpeg" alt="Slide 3" />
          </div>
        </Slider>
        <div className="navbar">
          <div className='container'>
            <nav>
              <ul>
                <li>
                  <a onMouseEnter={() => handleMenuToggle('akademiya')} onMouseLeave={() => handleMenuToggle('akademiya')}>
                    Akademiya
                    {activeMenu === 'akademiya' && (
                      <div className="dropdown-menu">
                        <ul>
                          <li>
                            <a>
                            Haqqımızda
                            </a>
                          </li>
                          <li>
                            <a>
                            Akademik Partnyorlar
                            </a>
                          </li>
                          <li>
                            <a>
                            Karyera və Talant Mərkəzi
                            </a>
                          </li>
                          <li>
                            <a>
                            Təhsil Modeli
                            </a>
                          </li>
                          <li>
                            <a>
                            Məzunlarımız
                            </a>
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
                          <li>
                            <a>
                            Digital Marketinq
                            </a>
                          </li>
                          <li>
                            <a>
                            Proqramlaşdırma
                            </a>
                          </li>
                          <li>
                            <a>
                            Dizayn
                            </a>
                          </li>
                          <li>
                            <a>
                            İT və Kiber Təhlükəsizlik
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </a>
                </li>
                <li>
                  <a >
                    Korporativ
                  </a>
                </li>
                <li>
                  <a >
                    Əlaqə
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='logo'>
            <img  src='/images/download.svg'/>
        </div>
      </div>
    </div>
  );
};

export default MySlider;
