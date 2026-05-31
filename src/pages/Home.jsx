import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { products } from "../data/products";

export default function Home() {
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const filtered =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  const featured = products[0];

  return (
    <div>
      <Navbar />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: 40 }}>

        {/* HERO */}
        <div style={{ marginBottom: 60 }}>
          <h1 style={{ fontSize: 56 }}>
            Active Elegance
          </h1>

          <p style={{ color: "#666", maxWidth: 700, lineHeight: 1.7 }}>
            Curated activewear for clarity, comfort and everyday movement.
          </p>
        </div>

        {/* FEATURED */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 40,
          marginBottom: 60,
          alignItems: "center"
        }}>
          <img
            src={featured.image}
            style={{
              width: "100%",
              height: 500,
              objectFit: "cover",
              borderRadius: 18
            }}
          />

          <div>
            <div style={{ fontSize: 12, letterSpacing: 3, color: "#999" }}>
              FEATURED
            </div>

            <h2>{featured.title}</h2>

            <p style={{ color: "#666", lineHeight: 1.7 }}>
              {featured.description}
            </p>

            <button
              onClick={() => navigate(`/product/${featured.id}`)}
              style={{
                marginTop: 20,
                padding: "14px 20px",
                border: "1px solid #111",
                background: "transparent",
                cursor: "pointer"
              }}
            >
              Explore collection
            </button>
          </div>
        </div>

        {/* CATEGORY MENU */}
        <div style={{ display: "flex", gap: 16, marginBottom: 40 }}>
          {["All", "Best Sellers", "New In", "Yoga"].map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              style={{
                padding: "10px 14px",
                borderRadius: 999,
                border: "1px solid #ddd",
                background: category === c ? "#111" : "#fff",
                color: category === c ? "#fff" : "#111",
                cursor: "pointer"
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/* GRID (2 COL FIX) */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: 30
        }}>
          {filtered.map((p) => (
            <div
              key={p.id}
              onClick={() => navigate(`/product/${p.id}`)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={p.image}
                style={{
                  width: "100%",
                  height: 320,
                  objectFit: "cover",
                  borderRadius: 18,
                  transition: "0.3s"
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
              />

              <h3>{p.title}</h3>
              <p style={{ color: "#666", fontSize: 14 }}>
                {p.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
