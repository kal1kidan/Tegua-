import Navbar from "../components/Navbar";
import { getSession } from "../lib/auth";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const user = getSession();
  const navigate = useNavigate();

  // ✅ Navigate directly to Explore page
  const beginExploring = () => {
    navigate("/explore");
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section Full Screen 4K */}
      <section
        style={{
          ...heroStyle,
          backgroundImage: `url('https://i.pinimg.com/736x/58/3d/08/583d08b030d54aafc65a144d0734e417.jpg')`,
        }}
      >
        <div style={overlayStyle}>
          <h1 style={heroTitle}>Discover Ethiopia with Teguaዥ 🌍</h1>
          <p style={heroSubtitle}>
            Explore breathtaking landscapes, rich culture, and hidden gems across the country.
          </p>
          <button onClick={beginExploring} style={heroButton}>
            Begin Exploring
          </button>
        </div>
      </section>
    </div>
  );
}

// Styles
const heroStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "relative",
  textAlign: "center",
};

const overlayStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  color: "white",
  padding: "20px 40px",
  borderRadius: "12px",
  maxWidth: "800px",
};

const heroTitle = {
  fontSize: "3rem",
  fontWeight: "bold",
  marginBottom: "15px",
};

const heroSubtitle = {
  fontSize: "1.5rem",
  marginBottom: "25px",
};

const heroButton = {
  padding: "15px 30px",
  fontSize: "18px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#682424",
  color: "white",
  cursor: "pointer",
};