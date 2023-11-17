import styles from '@/styles/Modal.module.css'

const Modal = ({ user, closeModal }) => {

  const generateReport = () => {
    console.log('Generating report for', user.name);
    closeModal();
  }

  return (
    <div className={styles.modal}>
      {user &&
        <div className={styles.modalContent}>
          <span className={styles.close} onClick={closeModal}>&times;</span>

          <h2 className={styles.h2}>{user.username}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>

          <button className={styles.button} onClick={generateReport} >
            Generate Report
          </button>
        </div>
      }
    </div>
  );
}

export default Modal;