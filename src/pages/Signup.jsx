import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, success, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(fullName, email, password);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign up</h3>

      <label>Full Name:</label>
      <input
        type="text"
        onChange={(e) => setFullName(e.target.value)}
        value={fullName}
      />

      <label>Email:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading}>Sign up</button>
      {error && (Array.isArray(error) ? (
        error.map((err) => <div key={err.msg} className="error">{err.msg}</div>)
      ) : (
        <div className="error">{error}</div>
      ))}
      {success && <div className="success">{success}</div>}
    </form>
  );
};

export default Signup;
