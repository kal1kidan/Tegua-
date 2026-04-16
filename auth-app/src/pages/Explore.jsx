import Navbar from "../components/Navbar";
import { useRef, useState } from "react";

export default function Explore() {
  const sectionRef = useRef(null);

  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(false);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const toggleFavorite = (index) => {
    if (favorites.includes(index)) {
      setFavorites(favorites.filter((i) => i !== index));
    } else {
      setFavorites([...favorites, index]);
    }
  };

  // 🗺️ OPEN GOOGLE MAPS
  const openMap = (placeName) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      placeName
    )}`;
    window.open(url, "_blank");
  };

  // 🌍 FETCH INFO FROM WIKIPEDIA
  const fetchInfo = async (placeName) => {
    setSelectedPlace(placeName);
    setLoading(true);
    setInfo("");

    try {
      const res = await fetch(
        `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
          placeName
        )}`
      );

      const data = await res.json();
      setInfo(data.extract || "No information found for this place.");
    } catch (err) {
      setInfo("Failed to load information.");
    }

    setLoading(false);
  };

  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section style={heroStyle}>
        <div style={overlayStyle}>
          <h1 style={heroTitle}>Explore Ethiopia 🌍</h1>
          <p style={heroSubtitle}>
            Discover amazing landscapes, culture, and history.
          </p>

          <button onClick={scrollToSection} style={exploreButton}>
            Start Exploring ↓
          </button>
        </div>
      </section>

      {/* SECTION */}
      <section ref={sectionRef} style={cardSection}>
        <h2 style={sectionTitle}>Top Places</h2>

        {/* SEARCH */}
        <input
          placeholder="Search places..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={searchBar}
        />

        {/* INFO BOX */}
        {selectedPlace && (
          <div style={infoBox}>
            <h3>{selectedPlace}</h3>
            {loading ? <p>Loading...</p> : <p>{info}</p>}
          </div>
        )}

        {/* CARDS */}
        <div style={grid}>
          {places
            .filter((p) =>
              p.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((place, index) => (
              <div key={index} style={card}>
                <img src={place.img} alt={place.name} style={cardImg} />

                <h3
                  style={{ cursor: "pointer" }}
                  onClick={() => fetchInfo(place.name)}
                >
                  {place.name}
                </h3>

                <p style={cardText}>{place.desc}</p>

                {/* 🗺️ MAP BUTTON */}
                <button onClick={() => openMap(place.name)} style={mapBtn}>
                  🗺️ View on Map
                </button>

                {/* ❤️ FAVORITE */}
                <button
                  onClick={() => toggleFavorite(index)}
                  style={favoriteBtn}
                >
                  {favorites.includes(index)
                    ? "❤️ Favorited"
                    : "🤍 Add to Favorites"}
                </button>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

/* DATA */
const places = [
  {
    name: "Lalibela Ethiopia",
    desc: "Rock-hewn churches",
    img: "https://i.pinimg.com/1200x/ac/c2/a0/acc2a005bb35a27ccd518e1ef35cb53f.jpg",
  },
  {
    name: "Danakil Depression Ethiopia",
    desc: "One of the hottest places on Earth",
    img: "https://i.pinimg.com/736x/fe/c5/ff/fec5ffc941d1dfb602934536b4a33c0e.jpg",
  },
  {
    name: "Gondar Ethiopia Castle",
    desc: "Historic castles",
    img: "https://i.pinimg.com/736x/03/82/28/0382282724284aaef3c9ace934ff550a.jpg",
  },
  {
    name: "Simien Mountains Ethiopia",
    desc: "Breathtaking views",
    img: "https://i.pinimg.com/736x/c4/f8/88/c4f8883f2fd479462ed631ad8eb4618d.jpg",
  },
  {
    name: "Axum Ethiopia",
    desc: "Ancient civilization",
    img: "https://i.pinimg.com/736x/d4/28/ae/d428ae3fcffc4fd64db00c1e29c17856.jpg",
  },
  {
    name: "Bale Mountains National Park Ethiopia",
    desc: "Wildlife and nature",
    img: "https://i.pinimg.com/1200x/14/5b/60/145b60e3a8da9a81db70f2526b27b67a.jpg",
  },
];

/* STYLES */
const heroStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundImage:
    "url('https://i.pinimg.com/736x/8f/fa/dc/8ffadce571b4f59fd0febc5ab2fba5eb.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const overlayStyle = {
  backgroundColor: "rgba(0,0,0,0.4)",
  color: "white",
  padding: "20px 40px",
  borderRadius: "12px",
};

const heroTitle = {
  fontSize: "3rem",
  marginBottom: "10px",
};

const heroSubtitle = {
  fontSize: "1.2rem",
  marginBottom: "20px",
};

const exploreButton = {
  padding: "10px 20px",
  border: "none",
  borderRadius: "8px",
  backgroundColor: "#682424",
  color: "white",
  cursor: "pointer",
};

const cardSection = {
  padding: "30px",
  background: "#302020",
  color: "white",
  textAlign: "center",
};

const sectionTitle = {
  fontSize: "2rem",
  marginBottom: "20px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
};

const card = {
  background: "white",
  color: "black",
  padding: "15px",
  borderRadius: "10px",
};

const cardImg = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderRadius: "8px",
};

const cardText = {
  fontSize: "14px",
};

const searchBar = {
  padding: "10px",
  width: "60%",
  marginBottom: "20px",
  borderRadius: "8px",
  border: "none",
};

const favoriteBtn = {
  marginTop: "10px",
  padding: "8px 12px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  backgroundColor: "#682424",
  color: "white",
};

const mapBtn = {
  marginTop: "10px",
  padding: "8px 12px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  backgroundColor: "#1e88e5",
  color: "white",
};

const infoBox = {
  background: "white",
  color: "black",
  padding: "15px",
  marginBottom: "20px",
  borderRadius: "10px",
};