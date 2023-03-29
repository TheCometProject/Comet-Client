import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { user } = useAuthContext();
  const [alger, setAlger] = useState("");

  const handleClick = () => {
    const fetchAlger = async () => {
      const response = await fetch("http://localhost:4000/api/v1/alger", {
        headers: { Authorization: `Bearer ${user.accessToken}` },
      });
      const json = await response.json();

      if (response.ok) {
        setAlger(json);
      }
      else {
        setAlger(json.error);
      }
    };
    user ? fetchAlger() : setAlger("Not authenticated");
  };

  return (
    <div className="home">
      <button onClick={handleClick}>fetch a protected api route:</button>
      <h2>{alger}</h2>
    </div>
  );
};

export default Home;