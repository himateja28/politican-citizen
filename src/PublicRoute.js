import { Navigate } from 'react-router-dom';

const PublicRoute = ({ element }) => {
  const sessionExpiration = localStorage.getItem("sessionExpiration");
  const now = new Date().getTime();

  // If the user is logged in (session not expired), redirect to home/dashboard
  if (sessionExpiration && now < sessionExpiration) {
    return <Navigate to="/viewupdates" />;  // or wherever you want to redirect logged-in users
  }

  // If the user is not logged in, allow access to the public route
  return element;
};

export default PublicRoute;
