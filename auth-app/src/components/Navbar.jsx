import { useNavigate, useLocation } from "react-router-dom";
import { getSession, clearSession } from "../lib/auth";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const user = getSession();

  const logout = () => {
    clearSession();
    navigate("/login");
  };

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>Teguaዥ </div>
      <div style={navLinks}>
        <button
          onClick={() => {
            if (location.pathname !== "/home") {
              navigate("/home"); // Always go to home if not there
            }
          }}
          style={linkButton}
        >
          Home
        </button>
        <button
          onClick={() => {
            if (location.pathname !== "/explore") {
              navigate("/explore"); // Always go to explore if not there
            }
          }}
          style={linkButton}
        >
          Explore
        </button>
        {user && <button onClick={logout} style={logoutButton}>Logout</button>}
      </div>
    </nav>
  );
}

// Styles
const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  background: "#302020",
  color: "white",
};

const logoStyle = { fontWeight: "bold", fontSize: "20px" };

const navLinks = { display: "flex", gap: "10px" };

const linkButton = {
  background: "transparent",
  border: "none",
  color: "white",
  cursor: "pointer",
  fontSize: "16px",
};

const logoutButton = {
  ...linkButton,
  background: "red",
  padding: "5px 10px",
  borderRadius: "6px",
};