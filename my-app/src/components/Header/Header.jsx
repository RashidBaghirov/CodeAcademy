import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './_Header.scss';
import { Link } from 'react-router-dom';
function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <div className="address">
              <p>
                Nizami küçəsi 203B, AF Business House, 2-ci mərtəbə (+994 12) 310 0113
              </p>
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-center align-items-center">
            <div>
              <div className="social-icons">
                <a className="m-3">
                  <i className="bi bi-facebook"></i>
                </a>
                <a className="m-3">
                  <i className="bi bi-instagram"></i>
                </a>
                <a className="m-3">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a className="m-3">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <div className="col-lg-6 d-flex justify-content-center align-items-center">
                <div className="searching">
                  <a className="m-3" onClick={handleModalOpen}>
                    <i className="bi bi-search"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="request_button_wrapper">
                  <Link className="request" to="/request">
                    <span className="request_button">
                      <span className="request_button_text">Müraciət et</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleModalClose}  className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>
            <img src="images/logofoot.png" alt="CodeAcademy Logo" className="modal-logo" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input placeholder="Axtar" style={{ boxShadow: 'none' }} className="form-control search_input" type="search" />
        </Modal.Body>
      </Modal>
    </header>
  );
}

export default Header;
