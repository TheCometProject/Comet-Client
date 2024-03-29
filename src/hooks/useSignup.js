import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { API_URL } from "/src/constants"


export const useSignup = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();


  const signup = async (fullName, email, password, confirmPassword) => {
    setIsLoading(true);
    setError(null);
    if (password !== confirmPassword) {
      setIsLoading(false);
      setError("Passwords do not match!");
      console.log(password, confirmPassword);
    } else {
      const response = await fetch(`${API_URL}/api/v1/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password }),
      }).catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });

      if (response) {
        const json = await response.json();

        if (!response.ok) {
          setIsLoading(false);
          setError(json.error);
        }

        if (response.ok) {
          setSuccess(json.message);
          setTimeout(() => {
            // save the user to local storage
            const { message, ...user } = json;
            localStorage.setItem("user", JSON.stringify(user));
            
            // update the auth context
            dispatch({ type: "LOGIN", payload: json });
          }, 2000);
        }
      }
    }
  };

  return { signup, error, success, isLoading };
};
