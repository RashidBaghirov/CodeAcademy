import React from "react";
import "./_AllHeader.scss";
import { Link } from 'react-router-dom';

function AllHeader() {
    const [activeMenu, setActiveMenu] = React.useState(null);
    const handleMenuToggle = (menuName) => {
        setActiveMenu(menuName === activeMenu ? null : menuName);
      };
    
    return (
        <header className="allhead">
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
                              <Link to="/akademi">
                              Akademik Partnyorlar</Link>
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
                  <Link to="/corporativ">

                    Korporativ
                    </Link>
                  </a>
                </li>
                <li>
                  <a >
                   <Link to="/contact">
                   Əlaqə
                   </Link>
                  </a>
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
        </header>
        );
    }
    
    export default AllHeader;