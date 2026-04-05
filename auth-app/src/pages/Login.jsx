import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../lib/auth";

export default function Login() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!usernameOrEmail || !password) {
      setError("All fields are required");
      return;
    }

    const user = loginUser({ usernameOrEmail, password });
    if (!user) {
      setError("Invalid credentials or account does not exist");
      return;
    }

    setError("");
    navigate("/home");
  };

  return (
    <div style={container}>
      <form onSubmit={handleLogin} style={card}>
        <h2 style={title}>Login</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <input
          placeholder="Username or Email"
          onChange={(e) => setUsernameOrEmail(e.target.value)}
          style={input}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          style={input}
        />

        <button style={button}>Login</button>

        <p style={{ marginTop: "10px", color: "black" }}>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  );
}

// Styles
const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh", // full screen
  width: "100%",
  backgroundImage: "url('https://i.pinimg.com/736x/8f/fa/dc/8ffadce571b4f59fd0febc5ab2fba5eb.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  padding: "20px 0",
};

const card = {
  backgroundColor: "rgba(255, 255, 255, 0.7)", // semi-transparent
  padding: "25px",
  borderRadius: "12px",
  width: "80%",
  maxWidth: "400px", // smaller form
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  color: "black",
  margin: "0 auto",
};

const title = {
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "15px",
  color: "black",
};

const input = {
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  outline: "none",
  color: "black",
  fontSize: "1rem",
};

const button = {
  padding: "10px",
  border: "none",
  borderRadius: "6px",
  backgroundColor: "#682424",
  color: "white",
  cursor: "pointer",
  fontWeight: "bold",
};