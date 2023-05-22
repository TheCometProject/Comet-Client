import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { API_URL } from "/src/constants"


export const useLogin = () => {
  console.log(API_URL);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`${API_URL}/api/v1/login`, {
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
        
        // update the loading state
        setIsLoading(false);
      }
    }
  };

  return { login, error, isLoading };
};
