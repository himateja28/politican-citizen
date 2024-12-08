import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const sessionExpiration = localStorage.getItem("sessionExpiration");
  const now = new Date().getTime();

  // Check if session has expired
  if (!sessionExpiration || now > sessionExpiration) {
    localStorage.clear();  // Clear any session data
    return <Navigate to="/login" />;  // Redirect to login page if session is invalid
  }

  // If session is valid, render the protected component
  return element;
};

export default PrivateRoute;
