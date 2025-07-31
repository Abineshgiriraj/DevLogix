import React from "react";
import { Navigate } from "react-router-dom";
import { getLocalStorage } from "../../utils/helper";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const tokenData = getLocalStorage("tokenData");
  if (!tokenData) {
    return <Navigate to="/signin" replace />;
  }
  return <>{children}</>;
};

export default PrivateRoute;