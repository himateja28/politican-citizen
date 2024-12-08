import React, { useState } from "react";
import styles from "./SocioConnect.module.css";
import UploadWidget from "./UploadWidget";
import axios from "axios";

function IssueForm() {
  // State to store form data
  const [formData, setFormData] = useState({
    postedby: "",
    idate: "",
    iname: "",
    idepartment: "", // Default value for the select field
    idiscription: "", // Corrected key here
    links: "", // To store uploaded image URL
    area: "", // New field for area
    pincode: "" // New field for pincode
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
    console.log(formData)
    axios.post("https://politician-citizen-production.up.railway.app/issue/add", formData).then((res) => {
      alert(res.data);
    });
  };

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit}>
      <div className={styles.inputField}>
        <label htmlFor="postedby">
          Name of citizen <span className={styles.requiredField}>*</span>
        </label>
        <input
          id="postedby"
          className={styles.input}
          type="text"
          value={formData.postedby}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className={styles.inputField}>
        <label htmlFor="iname">
          Issue name <span className={styles.requiredField}>*</span>
        </label>
        <input
          id="iname"
          className={styles.input}
          type="text"
          value={formData.iname}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className={styles.inputField}>
        <label htmlFor="idate">
          Date of issue <span className={styles.requiredField}>*</span>
        </label>
        <input
          id="idate"
          className={styles.input}
          type="date"
          value={formData.idate}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className={styles.selectField}>
        <label htmlFor="idepartment" className={styles.label}>
          Issue related department{" "}
          <span className={styles.requiredField}>*</span>
        </label>
        <div className={styles.select}>
          <select
            id="idepartment"
            className={styles.selectValue}
            value={formData.idepartment}
            onChange={handleInputChange}
            required
          >
            <option value="NHAI">
              National Highways Authority of India (NHAI)
            </option>
            <option value="Municipality">
              Municipality
            </option>
          </select>
        </div>
      </div>

      <div className={styles.textareaField}>
        <label htmlFor="idescription" className={styles.label}>
          Issue description <span className={styles.requiredField}>*</span>
        </label>
        <input
          id="idiscription"
          className={styles.input}
          value={formData.idiscription} // Corrected key
          onChange={handleInputChange}
          required
        />
      </div>

      {/* New input field for Area */}
      <div className={styles.inputField}>
        <label htmlFor="area">
          Area <span className={styles.requiredField}>*</span>
        </label>
        <input
          id="area"
          className={styles.input}
          type="text"
          value={formData.area}
          onChange={handleInputChange}
          required
        />
      </div>

      {/* New input field for Pincode */}
      <div className={styles.inputField}>
        <label htmlFor="pincode">
          Pincode <span className={styles.requiredField}>*</span>
        </label>
        <input
          id="pincode"
          className={styles.input}
          type="text"
          value={formData.pincode}
          onChange={handleInputChange}
          required
        />
      </div>

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
        Raise issue
      </button>
    </form>
  );
}

export default IssueForm;
