import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

const Login = ({ onClose, onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleLogin = () => {
    if (email) {
      onLogin(email);
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-modal">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={onClose} className="close-btn">
        Close
      </button>
    </div>
  );
};

export default Login;
