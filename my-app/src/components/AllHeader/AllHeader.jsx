import React, { useEffect, useState } from "react";
import "./_AllHeader.scss";
import { Link } from 'react-router-dom';

function AllHeader() {
  const [activeMenu, setActiveMenu] = useState(null);
  const handleMenuToggle = (menuName) => {
    setActiveMenu(menuName === activeMenu ? null : menuName);
  };

  const [modeData, setModeData] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7140/mode')
      .then(response => response.json())
      .then(data => {
        setModeData(data)
      })
      .catch(error => {
        console.error('API request error:', error);
      });

  }, [])

  return (
    <header className="allhead">
      <div className="navbar">
        <div className='container'>
          <nav>
            <ul>
              <li>
                <a onMouseEnter={() => handleMenuToggle('akademiya')} onMouseLeave={() => handleMenuToggle('akademiya')}>
                  <Link style={{ textDecoration: "none" }} to="/about">
                    Akademiya
                  </Link>
                  {activeMenu === 'akademiya' && (
                    <div className="dropdown-menu">
                      <ul>
                        <li>
                          <Link style={{ textDecoration: "none" }} to="/about">
                            Haqqımızda
                          </Link>
                        </li>
                        <li>
                          <Link style={{ textDecoration: "none" }} to="/akademi">
                            Akademik Partnyorlar
                          </Link>
                        </li>
                        <li>
                          <Link style={{ textDecoration: "none" }} to="/karyera">
                            Karyera və Talant Mərkəzi
                          </Link>
                        </li>
                        <li>
                          <Link style={{ textDecoration: "none" }} to="/education">
                            Təhsil Modeli
                          </Link>
                        </li>
                        <li>
                          <Link style={{ textDecoration: "none" }} to="/graduant">
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
                          <li key={item.id}>
                            <Link style={{ textDecoration: "none" }} to={`/profession/${item.id}`}>
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
                <Link style={{ textDecoration: "none" }} to="/corporativ">
                  Korporativ
                </Link>
              </li>
              <li>
                <Link style={{ textDecoration: "none" }} to="/contact">
                  Əlaqə
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className='logo'>
        <Link to="/">
          <img src='/images/logofoot.png' />
        </Link>
      </div>
    </header>
  );
}

export default AllHeader;
