import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Issue.module.css"; // Assuming you're using CSS modules

const IssuesList = () => {
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIssueId, setSelectedIssueId] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  useEffect(() => {
    axios
      .get("https://politician-citizen-production.up.railway.app/issue/all") // The API endpoint you created in Spring Boot
      .then((response) => {
        setIssues(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching issues:", error);
        setLoading(false);
      });
  }, []);

  const handleRespond = (iid) => {
    setSelectedIssueId(iid); // Map the issue's iid to selectedIssueId
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setResponseMessage("");
  };

  const handleSubmitResponse = () => {
    console.log(selectedIssueId + " " + responseMessage);
    axios
      .post(`http://localhost:8080/issue/respond?id=${selectedIssueId}&message=${responseMessage}`, {
      })
      .then((response) => {
        alert("Response submitted successfully for :", response.data);
        handleCloseModal();
      })
      .catch((error) => {
        console.error("Error submitting response:", error);
      });
  };

  if (loading) {
    return <p>Loading issues...</p>;
  }

  return (
    <div className={styles.container}>
      {issues.length === 0 ? (
        <p>No issues were received.</p>
      ) : (
        <div>
          <h1 className={styles.issueHeader}>Issues Reported</h1>
          <div className={styles.issuesList}>
            {issues.map((issue) => (
              <div key={issue.id} className={styles.issueCard}>
                <h3 className={styles.issueTitle}>{issue.iname}</h3>
                <p><strong>Issue ID:</strong> {issue.iid}</p> {/* Displaying the Issue ID */}
                <p><strong>Posted by:</strong> {issue.postedby}</p>
                <p><strong>Date:</strong> {issue.idate}</p>
                <p><strong>Department:</strong> {issue.idepartment}</p>
                <p><strong>Description:</strong> {issue.idiscription}</p>
                <p><strong>Area:</strong> {issue.area}</p>
                <p><strong>Pincode:</strong> {issue.pincode}</p>

                {issue.links && (
                  <div className={styles.imageWrapper}>
                    <img
  src={issue.links}
  alt={issue.iname}  // Simplify the alt attribute
  className={styles.issueImage}
  style={{height: "220px"}}
/>

                  </div>
                )}

                <button
                  onClick={() => handleRespond(issue.iid)} // Pass issue.iid to the handleRespond function
                  className={styles.respondButton}
                >
                  Respond
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className={styles.modalBackdrop}>
          <div className={styles.modal}>
            <h2>Respond to Issue</h2>
            <textarea
              className={styles.responseInput}
              value={responseMessage}
              onChange={(e) => setResponseMessage(e.target.value)}
              placeholder="Enter your response message"
            />
            <div className={styles.modalButtons}>
              <button
                onClick={handleSubmitResponse}
                className={styles.submitButton}
              >
                Submit
              </button>
              <button onClick={handleCloseModal} className={styles.closeButton}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IssuesList;
