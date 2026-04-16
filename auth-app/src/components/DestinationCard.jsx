import { useState } from "react";

export default function DestinationCard({ name, image, price }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <img src={image} alt={name} width="200" />
      <h3>{name}</h3>
      <p>Price: ${price}</p>

      <p>
        {price < 100 ? "Budget Friendly 💸" : "Luxury 💰"}
      </p>

      <button onClick={() => setIsFavorite(!isFavorite)}>
        {isFavorite ? "❤️ Favorited" : "🤍 Add to Favorites"}
      </button>
    </div>
  );
}