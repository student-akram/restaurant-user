import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { login as loginService, getProfile } from "../../services/authService";

import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginService(email, password);

      const profile = await getProfile(data.idToken);

      login(profile);

      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button>Login</button>

      </form>

      <br />

      <Link to="/signup">
        Create Account
      </Link>

      <br /><br />

      <Link to="/forgot-password">
        Forgot Password?
      </Link>
    </div>
  );
};

export default Login;