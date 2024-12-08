import React, { useState } from "react";
import styles from "./SocioConnect.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { sendEmail } from './SendMail'; // Import sendEmail function

function RegisterForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    emailid: "",
    username: "",
    password: "",
    dob: "",
    address: "",
    mobileno: "",
  });

  const formFields = [
    { name: "fullname", label: "Fullname" },
    { name: "emailid", label: "Email id" },
    { name: "username", label: "Username" },
    { name: "password", label: "Password", type: "password" },
    { name: "dob", label: "Date of Birth", type: "date" },
    { name: "address", label: "Address", type: "textarea" },
    { name: "mobileno", label: "Mobile Number", type: "tel" },
  ];

  // Update form data when inputs change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Password validation: At least one uppercase letter, one special character, one digit, and minimum length of 8
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

    if (!passwordRegex.test(formData.password)) {
      alert("Password must be at least 8 characters long, contain one uppercase letter, one special character, and one digit.");
      return;
    }

    // Send the formData via axios to the backend
    axios
      .post("http://localhost:8080/user/signup", formData)
      .then((res) => {
        if (res) {
          // Send a registration success email
          const emailData = {
            fullname: formData.fullname,
            emailid: formData.emailid,
            message: `Thank you for registering, ${formData.fullname}. Your account has been successfully created.`,
          };
          sendEmail(emailData);  // Call sendEmail function

          // Navigate to login page after successful registration
          navigate('/login');
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      {formFields.map((field, index) => (
        <div key={index} className={styles.formField}>
          <label htmlFor={field.name} className={styles["visually-hidden"]}>
            {field.label}
          </label>
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              placeholder={field.label}
              className={styles.formInput}
              value={formData[field.name]} // Bind the value to the state
              onChange={handleInputChange} // Update state on change
              required
            />
          ) : (
            <input
              type={field.type || "text"}
              id={field.name}
              name={field.name}
              placeholder={field.label}
              className={styles.formInput}
              value={formData[field.name]} // Bind the value to the state
              onChange={handleInputChange} // Update state on change
              required
            />
          )}
        </div>
      ))}
      <button type="submit" className={styles.submitButton}>
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
