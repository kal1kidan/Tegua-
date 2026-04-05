import { getSession } from "../lib/auth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = getSession();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}