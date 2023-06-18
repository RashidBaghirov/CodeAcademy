import React, { useState } from "react";
import "./_HeaderNavbar.scss";

const HeaderNavbar = () => {
  const messageCount = 3;
  const [showMessages, setShowMessages] = useState(false);
  const [showLogout, setShowLogout] = useState(false);

  const handleAdminClick = () => {
    setShowMessages(false);
    setShowLogout(!showLogout);
  };

  const handleLogoutClick = () => {
    // Logout işlemleri burada yapılabilir
  };

  const handleMessagesClick = () => {
    setShowLogout(false);
    setShowMessages(!showMessages);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="header__left">
              <div className="header__logo">
                <img src="/images/logofoot.png" alt="Logo" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="header__center">
              <div className="header__search">
                <input className="w-100" type="text" placeholder="Search" />
                <button className="header__search-button">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex justify-content-end">
            <div className="header__right">
              <span className="header__message-icon me-5">
                <i
                  className="bi bi-envelope"
                  style={{ fontSize: "20px" }}
                  onClick={handleMessagesClick}
                ></i>
                {messageCount > 0 && (
                  <span className="header__message-count">{messageCount}</span>
                )}
              </span>
              <span className="header__admin-name" onClick={handleAdminClick}>
                John Doe
              </span>
              {showLogout && (
                <div className="header__logout">
                  <a className="d-flex" style={{textDecoration:"none",color:"black"}} href="#" onClick={handleLogoutClick}>
                   Logout <i class="ms-2 bi bi-box-arrow-right"></i>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showMessages && (
        <div className="header__message-container">
          <div className="header__message-item">
            <div className="header__message-avatar p-4">
            <i
                  className="bi bi-envelope"
                  style={{ fontSize: "20px",color:"#00AA49" }}
                  onClick={handleMessagesClick}
                ></i>
            </div>
            <div className="header__message-content">
              <div className="header__message-sender text-dark">
                Sender Name
              </div>
              <div className="header__message-text">Message Content</div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderNavbar;
