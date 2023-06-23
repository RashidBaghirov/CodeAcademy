import React from 'react';
import Modal from 'react-modal';

const CustomModal = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      contentClassName="custom-modal-content"
      overlayClassName="custom-modal-overlay"
      style={{ content: { width: '1000px' } }}
      onRequestClose={onRequestClose}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
