import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Request = () => {
  const [refdata, setRefdata] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [replaceText, setReplaceText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get('https://localhost:7140/requests')
      .then((response) => {
        setRefdata(response.data);
      })
      .catch((error) => {
        console.error('API request error:', error);
      });
  }, []);

  const handleReplace = (request) => {
    setSelectedRequest(request);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    const url = `https://localhost:7140/deletedReplace/${id}`;
  
    axios
      .post(url)
      .then((response) => {
        console.log('Delete success');
        setSelectedRequest(null);
        setIsModalOpen(false);
        toast.success('Request deleted successfully');
        setRefdata((prevRefdata) => prevRefdata.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error('Delete error:', error);
        toast.error('Error deleting request');
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

  return (
    <div className="container-fluid">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Title</th>
            <th>Email</th>
            <th>Number</th>
            <th>IsReply</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {refdata.map((request) => (
            <tr key={request.id}>
              <td>{request.name}</td>
              <td>{request.additionalInfo}</td>
              <td>{request.email}</td>
              <td>{request.number}</td>
              <td>{request.isReply ? 'True' : 'False'}</td>
              <td>
                {!request.isReply && (
                  <button
                    className="btn btn-success me-2"
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleReplace(request)}
                  >
                    Replace
                  </button>
                )}
                <button
                  className="btn btn-danger"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleDelete(request.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
    </div>
  );
};

export default Request;
