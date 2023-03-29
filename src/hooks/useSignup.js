import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const useSignup = () => {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const navigate = useNavigate();

  const signup = async (fullName, email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("http://localhost:4000/api/v1/register", {
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
        // TODO: save accesstoken & refresh token returned from api (currently not implemented) + perform a login dispatch 
        setTimeout(() => {
          navigate("/login")
        }, 2000);
      }
    }
  };

  return { signup, error, success, isLoading };
};
