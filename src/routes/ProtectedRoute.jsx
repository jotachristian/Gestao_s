import { Navigate } from "react-router-dom";
import config from "../config"; // Importa as configurações globais

const ProtectedRoute = ({ children, allowedRoles }) => {
  const user = JSON.parse(localStorage.getItem("user")); 
  if (config.enableRouteRestrictions) {
    if (!user || !allowedRoles.includes(user.role)) {
      return <Navigate to="/" replace />;
    }
  }
  return children;
};

export default ProtectedRoute;

