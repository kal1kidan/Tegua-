import Navbar from "../components/Navbar";
import { useRef } from "react";

export default function Explore() {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          ...heroStyle,
          backgroundImage: `url('https://i.pinimg.com/736x/8f/fa/dc/8ffadce571b4f59fd0febc5ab2fba5eb.jpg')`,
        }}
      >
        <div style={overlayStyle}>
          <h1 style={heroTitle}>Explore Ethiopia 🌍</h1>
          <p style={heroSubtitle}>
            Discover amazing landscapes, rich culture, and hidden gems.
          </p>

          <button onClick={scrollToSection} style={exploreButton}>
            Start Exploring ↓
          </button>
        </div>
      </section>

      {/* Places Section */}
      <section ref={sectionRef} style={cardSection}>
        <h2 style={sectionTitle}>Top Places</h2>

        <div style={grid}>
          {places.map((place, index) => (
            <div
              key={index}
              style={card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
              }}
            >
              <img src={place.img} alt={place.name} style={cardImg} />
              <h3>{place.name}</h3>
              <p style={cardText}>{place.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* Data */
const places = [
  { 
    name: "Lalibela", 
    desc: "Rock-hewn churches", 
    img: "https://i.pinimg.com/1200x/ac/c2/a0/acc2a005bb35a27ccd518e1ef35cb53f.jpg" 
  },
  { 
    name: "Danakil", 
    desc: "Colorful desert", 
    img: "https://i.pinimg.com/736x/fe/c5/ff/fec5ffc941d1dfb602934536b4a33c0e.jpg" 
  },
   { 
    name: "Gondar", 
    desc: "Historic castles", 
    img: "https://i.pinimg.com/736x/03/82/28/0382282724284aaef3c9ace934ff550a.jpg" 
  },
  { 
    name: "Simien Mountains", 
    desc: "Breathtaking views", 
    img: "https://i.pinimg.com/736x/c4/f8/88/c4f8883f2fd479462ed631ad8eb4618d.jpg" 
  },
  { 
    name: "Axum", 
    desc: "Ancient obelisks", 
    img: "https://i.pinimg.com/736x/d4/28/ae/d428ae3fcffc4fd64db00c1e29c17856.jpg" 
  },
  { 
    name: "Bale Mountains", 
    desc: "Wildlife & nature", 
    img: "https://i.pinimg.com/1200x/14/5b/60/145b60e3a8da9a81db70f2526b27b67a.jpg" 
  },
 
];

/* Hero */
const heroStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  width: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
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
  marginBottom: "20px",
};

/* Button */
const exploreButton = {
  padding: "12px 25px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#682424",
  color: "white",
  cursor: "pointer",
};

/* Cards Section */
const cardSection = {
  padding: "30px 20px",
  background: "#302020", // ✅ your color
  textAlign: "center",
  color: "white",
};

const sectionTitle = {
  fontSize: "2rem",
  marginBottom: "20px",
};

/* Grid */
const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
  maxWidth: "1000px",
  margin: "0 auto",
};

/* Card */
const card = {
  background: "white",
  color: "black",
  padding: "15px",
  borderRadius: "10px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
  cursor: "pointer",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
};

const cardImg = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderRadius: "8px",
  marginBottom: "10px",
};

const cardText = {
  fontSize: "14px",
};