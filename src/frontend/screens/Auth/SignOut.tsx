import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { clearLocalStorage } from "../../utils/helper";

const SignOut: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    clearLocalStorage();
    navigate("/signin");
  }, [navigate]);
  return null;
};

export default SignOut;