import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  // Check if user is logged in
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // If logged in, render children, else redirect to login
  return loggedInUser ? children : <Navigate to="/login" />;
}

export default PrivateRoute;

