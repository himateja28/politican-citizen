import { Navigate } from 'react-router-dom';

const RoleBasedRoute = ({ element, allowedRoles }) => {
  const sessionExpiration = localStorage.getItem("sessionExpiration");
  const now = new Date().getTime();
  const userRole = localStorage.getItem("role"); // Fetch the user's role from local storage

  // Check if session has expired or role is not in allowedRoles
  if (!sessionExpiration || now > sessionExpiration) {
    localStorage.clear();  // Clear session and role data
    return <Navigate to="/login" />;  // Redirect to login if session is invalid
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/" />;  // Redirect to home if the user doesn't have the required role
  }

  // If session is valid and role is allowed, render the protected component
  return element;
};

export default RoleBasedRoute;
