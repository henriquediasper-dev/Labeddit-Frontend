import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { goToLogin } from "../router/coordinator";

export function useProtect() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      goToLogin(navigate);
    }
  }, [navigate]);
}
