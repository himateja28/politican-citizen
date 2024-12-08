import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Update.css"; // Create this CSS file for styles

const Update = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/user/updates") // Adjust the API endpoint if necessary
      .then((response) => {
        setUpdates(response.data);
      })
      .catch((error) => {
        console.error("Error fetching updates:", error);
      });
  }, []);

  return (
    <div className="updates-container">
      {updates.map((update) => (
        <div key={update.id} className="update-card">
          <h3 className="department">{update.department}</h3>
          <p className="description">{update.discription}</p>
          <p className="date">Date: {update.date}</p>
          <p className="posted-by">Posted by: {update.postedby}</p>
          <img src={update.links} alt="Update Visual" className="update-image" />
          <p className="update-text">{update.update}</p>
        </div>
      ))}
    </div>
  );
};

export default Update;
