import React, { useState } from "react";
import styles from "./Update.module.css";
import UploadWidget from "./UploadWidget";
import axios from "axios";

function UpdateForm() {
  // State to store form data
  const [formData, setFormData] = useState({
    update_name: "",        // Field for update text
    department: "",    // Field for department
    discription: "",   // Field for description
    date: "",          // Field for date
    links: "",
    postedby:localStorage.getItem("user")          
  });
  const [error, updateError] = useState();

  // Handle input changes for form fields
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle image upload
  function handleOnUpload(error, result, widget) {
    if (error) {
      updateError(error);
      widget.close({ quiet: true });
      return;
    }
    const secureUrl = result?.info?.secure_url;
    setFormData((prevData) => ({ ...prevData, links: secureUrl }));
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios.post("http://localhost:8080/update/add", formData).then((res) => {
      alert(res.data);
    });
  };

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit}>
      <div className={styles.inputField}>
        <label htmlFor="update">
          Update <span className={styles.requiredField}>*</span>
        </label>
        <input
          id="update"
          className={styles.input}
          type="text"
          value={formData.update}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className={styles.inputField}>
        <label htmlFor="department">
          Department <span className={styles.requiredField}>*</span>
        </label>
        <input
          id="department"
          className={styles.input}
          type="text"
          value={formData.department}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className={styles.textareaField}>
        <label htmlFor="discription" className={styles.label}>
          Description <span className={styles.requiredField}>*</span>
        </label>
        <textarea
          id="discription"
          className={styles.input}
          value={formData.discription}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className={styles.inputField}>
        <label htmlFor="date">
          Date <span className={styles.requiredField}>*</span>
        </label>
        <input
          id="date"
          className={styles.input}
          type="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
      </div>

      {/* Upload widget */}
      <UploadWidget onUpload={handleOnUpload}>
        {({ open }) => {
          function handleOnClick(e) {
            e.preventDefault();
            open();
          }
          return (
            <button onClick={handleOnClick} className={styles.uploadButton}>
              Upload an Image
            </button>
          );
        }}
      </UploadWidget>

      <button type="submit" className={styles.submitButton}>
        Update issue
      </button>
    </form>
  );
}

export default UpdateForm;
