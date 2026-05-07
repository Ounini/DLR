import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const user = auth.currentUser;

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
