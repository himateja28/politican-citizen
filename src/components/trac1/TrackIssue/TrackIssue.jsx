import React, { useState } from "react";
import styles from "./TrackIssue.module.css";
import Header from "./Header";
import axios from "axios";

// Modal component
function Modal({ message, onClose }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <p>{message}</p>
        <button onClick={onClose} className={styles.closeButton}>Close</button>
      </div>
    </div>
  );
}

function TrackIssue() {
  const [id, setId] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:8080/issue/check/${id}`)
      .then((res) => {
        setModalMessage("Status : "+res.data.status +"Respose is : "+res.data.responses); // Set the response data
        setModalVisible(true); // Show the modal
      })
      .catch((error) => {
        setModalMessage("Error fetching data. Please try again."); // Error message
        setModalVisible(true); // Show the modal
      });
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalMessage(""); // Reset the modal message
  };

  return (
    <main className={styles.container}>
      <Header />
      <h1 className={styles.title}>Track your issue</h1>
      <section className={styles.searchContainer}>
        <form className={styles.searchForm} onSubmit={handleSubmit}>
          <div className={styles.inputColumn}>
            <div className={styles.inputField}>
              <label htmlFor="issueId" className={styles.visually}>Enter Issue id</label>
              <input
                id="issueId"
                className={styles.input}
                type="text"
                onChange={(e) => setId(e.currentTarget.value)}
                placeholder="Enter Issue id"
              />
            </div>
          </div>
          <div className={styles.buttonColumn}>
            <button type="submit" className={styles.button}>Search</button>
          </div>
        </form>
      </section>

      {/* Modal rendering conditionally */}
      {modalVisible && <Modal message={modalMessage} onClose={closeModal} />}
    </main>
  );
}

export default TrackIssue;
