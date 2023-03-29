import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";


export const useLogin = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:4000/api/v1/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    }).catch((err) => {
      setIsLoading(false);
      setError(err.message);
    });

    if (response) {
      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError((json.errors && json.errors[0].msg) || json.error);
      }

      if (response.ok) {
        // save the user to local storage
        const { message, ...user } = json;
        localStorage.setItem("user", JSON.stringify(user));
        
        // update the auth context
        dispatch({ type: "LOGIN", payload: json });
        
        // update the success state
        setSuccess(json.message);

        // update the loading state
        setIsLoading(false);

        setTimeout(() => {
          navigate("/")
        }, 2000);
      }
    }
  };

  return { login, error, success, isLoading };
};