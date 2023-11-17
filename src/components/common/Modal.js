// Modal.js

import './Modal.css';

const Modal = ({ user, closeModal }) => {

  const generateReport = () => {
    console.log('Generating report for', user.name); 
    closeModal();
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        
        <h2>{user.username}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>

        <button onClick={generateReport}>
          Generate Report 
        </button>
      </div>
    </div>
  );
}

export default Modal;