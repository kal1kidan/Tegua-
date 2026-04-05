import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signupUser } from "../lib/auth";

export default function Signup() {
  const [form, setForm] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    phone: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!form.fullname || !form.username || !form.email || !form.password || !form.phone) {
      setError("All fields are required");
      return;
    }

    if (!form.email.includes("@") || !form.email.endsWith("gmail.com")) {
      setError("Email must end with '@gmail.com'");
      return;
    }

    const success = signupUser(form);
    if (!success) {
      setError("Username or email already exists");
      return;
    }

    localStorage.setItem("session", JSON.stringify(form));
    navigate("/home");
  };

  const continueWithGoogle = () => {
    alert("Google signup clicked (fake for now)");
  };

  return (
    <section style={heroStyle}>
      <div style={card}>
        <h1 style={heroTitle}>Create Your Teguaዥ Account 🌍</h1>
        <p style={heroSubtitle}>
          Sign up to explore Ethiopia's breathtaking landscapes and hidden gems.
        </p>

        <form onSubmit={handleSignup} style={formStyle}>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <input placeholder="Full Name" name="fullname" onChange={handleChange} style={input} />
          <input placeholder="Username" name="username" onChange={handleChange} style={input} />
          <input placeholder="Email" name="email" onChange={handleChange} style={input} />
          <input placeholder="Phone Number" name="phone" onChange={handleChange} style={input} />
          <input type="password" placeholder="Password" name="password" onChange={handleChange} style={input} />

          <button style={button}>Create Account</button>
          <button type="button" onClick={continueWithGoogle} style={googleButton}>
            Continue with Google
          </button>

          <p style={{ marginTop: "10px", color: "black" }}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </section>
  );
}

// Styles
const heroStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  width: "100%",
  backgroundImage: "url('https://i.pinimg.com/736x/8f/fa/dc/8ffadce571b4f59fd0febc5ab2fba5eb.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  textAlign: "center",
  padding: "40px 0",
};

const card = {
  backgroundColor: "rgba(255, 255, 255, 0.7)", // semi-transparent
  padding: "25px", // smaller padding
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

const heroTitle = {
  fontSize: "2rem",
  fontWeight: "bold",
  marginBottom: "15px",
  color: "black",
};

const heroSubtitle = {
  fontSize: "1rem",
  marginBottom: "20px",
  color: "black",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  textAlign: "left",
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

const googleButton = {
  ...button,
  backgroundColor: "#4285F4",
};