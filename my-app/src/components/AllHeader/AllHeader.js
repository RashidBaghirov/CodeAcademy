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
                            
                            <Link  style={{textDecoration:"none"}} to="/about">
                            Haqqımızda
                            </Link>
                            
                          </li>
                          <li>
                              <Link style={{textDecoration:"none"}} to="/akademi">
                              Akademik Partnyorlar</Link>
                          </li>
                          <li>
                            <Link  style={{textDecoration:"none"}} to="/karyera">
                            Karyera və Talant Mərkəzi
                            </Link>
                          </li>
                          <li>
                          <Link style={{textDecoration:"none"}}  to="/education">
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
                  <Link style={{textDecoration:"none"}} to="/corporativ">

                    Korporativ
                    </Link>
                </li>
                <li>
                 
                   <Link style={{textDecoration:"none"}} to="/contact">
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
        </header>
        );
    }
    
    export default AllHeader;