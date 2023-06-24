import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './_HeaderNavbar.scss';
import { Link } from 'react-router-dom';
const HeaderNavbar = () => {
  const navigate = useNavigate();
  const [refdata, setRefdata] = useState([]);
  const [showMessages, setShowMessages] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [replaceText, setReplaceText] = useState('');
  const [username, setUsername] = useState('');
  const handleAdminClick = () => {
    setShowMessages(false);
    setShowLogout(!showLogout);
  };


  useEffect(() => {
    const token = localStorage.getItem('token');
    const decodedToken = jwt_decode(token);
    const username = decodedToken.email;
    
    setUsername(username);
  }, []);
  

  useEffect(() => {
    axios
      .get('https://localhost:7140/requestpendig')
      .then((response) => {
        setRefdata(response.data);
      })
      .catch((error) => {
        console.error('API request error:', error);
      });
  }, []);

  useEffect(() => {
    const count = refdata.length;
    setMessageCount(count);
  }, [refdata]);

  const handleLogoutClick = () => {
    const url='https://localhost:7140/logout'
    axios.
    post(url)
    .then((response)=>{
      toast.success('Logout  successfully');
      setTimeout(() => {
        navigate("/");
        localStorage.removeItem("token");
      }, 2000);
    })
    .catch((error) => {
      console.error('Logout  error:', error);
      toast.error('Error logout request');
    });
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setReplaceText('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedRequest) {
      handleReplaceSubmit(selectedRequest);
    }
  };

  const handleReplaceSubmit = (request) => {
    const url = `https://localhost:7140/replace/${request.id}?replace=${replaceText}`;
    axios
      .post(url)
      .then((response) => {
        console.log('Replace success');
        setSelectedRequest(null);
        setIsModalOpen(false);
        setReplaceText('');

        setRefdata((prevRefdata) =>
          prevRefdata.map((item) =>
            item.id === request.id ? { ...item, isReply: true } : item
          )
        );
        setMessageCount((prevCount) => prevCount - 1);

        toast.success('Request replaced successfully');
      })
      .catch((error) => {
        console.error('Replace request error:', error);
        toast.error('Error replacing request');
      });
  };

  useEffect(() => {
    const handleSubmitOnEnter = (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        handleSubmit(e);
      }
    };

    window.addEventListener('keydown', handleSubmitOnEnter);

    return () => {
      window.removeEventListener('keydown', handleSubmitOnEnter);
    };
  }, [replaceText]);

  const handleMessagesClick = () => {
    setShowMessages(!showMessages);
  };

  const handleMessageItemClick = (request) => {
    setSelectedRequest(request);
    setShowMessages(false);
    setIsModalOpen(true);
    setRefdata((prevRefdata) =>
      prevRefdata.map((item) =>
        item.id === request.id ? { ...item, isReply: true } : item
      )
    );
    setMessageCount((prevCount) => prevCount - 1);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="header__left">
              <div className="header__logo">
                <Link to="/home">
                <img src="/images/logofoot.png" alt="Logo" />
                
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="header__center d-none">
              <div className="header__search d-none">
                <input className="w-100" type="hidden" placeholder="Search" />
                <button className="header__search-button">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex justify-content-end">
            <div className="header__right">
              <span
                className="header__message-icon me-5"
                onClick={handleMessagesClick}
              >
                <i
                  className="bi bi-envelope"
                  style={{ fontSize: '20px' }}
                ></i>
                {messageCount > 0 && (
                  <span className="header__message-count">{messageCount}</span>
                )}
              </span>
              <span className="header__admin-name" onClick={handleAdminClick}>
              {username}
              </span>
              {showLogout && (
                <div className="header__logout">
                  <a
                    className="d-flex"
                    style={{ textDecoration: 'none', color: 'black' }}
                    href="#"
                    onClick={handleLogoutClick}
                  >
                    Logout <i className="ms-2 bi bi-box-arrow-right"></i>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showMessages && (
        <div className="header__message-container">
          {refdata.map((request) => (
            <div
              className="header__message-item"
              key={request.id}
              onClick={() => handleMessageItemClick(request)}
            >
              <div className="header__message-avatar p-4">
                <i
                  className="bi bi-envelope"
                  style={{ fontSize: '20px', color: '#00AA49' }}
                ></i>
              </div>
              <div className="header__message-content">
                <div className="header__message-sender text-dark">
                  {request.name} {request.surname}
                </div>
                <div className="header__message-text">Message Content</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedRequest && (
        <Modal
          isOpen={isModalOpen}
          contentClassName="custom-modal-content"
          overlayClassName="custom-modal-overlay"
          style={{ content: { width: '1000px', margin:"0 auto" } }}
        >
          <h2>Replace Message</h2>
          <p>
            <strong>Name and Surname:</strong> {selectedRequest.name}
          </p>
          <p>
            <strong>Title:</strong> {selectedRequest.additionalInfo}
          </p>
          <p>
            <strong>Email:</strong> {selectedRequest.email}
          </p>
          <p>
            <strong>Number:</strong> {selectedRequest.number}
          </p>
          <p>
            <strong>Company:</strong> {selectedRequest.company}
          </p>
          <p>
            <strong>Position:</strong> {selectedRequest.position}
          </p>
          <p>
            <strong>EmployeeCount:</strong> {selectedRequest.employeeCount}
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="replaceInput" className="form-label">
                Replace:
              </label>
              <textarea
                className="form-control"
                id="replaceInput"
                value={replaceText}
                onChange={(e) => setReplaceText(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleModalClose}
            >
              Cancel
            </button>
          </form>
        </Modal>
      )}
      <ToastContainer />
    </header>
  );
};

export default HeaderNavbar;
