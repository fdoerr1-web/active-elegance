import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { products } from "../data/products";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div>
        <Navbar />
        <div style={{ padding: 40 }}>Produkt nicht gefunden</div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <div style={{ maxWidth: 1000, margin: "0 auto", padding: 40 }}>

        <button
          onClick={() => navigate(-1)}
          style={{
            marginBottom: 30,
            border: "none",
            background: "none",
            cursor: "pointer"
          }}
        >
          ← Back
        </button>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 50
        }}>

          <img
            src={product.image}
            style={{
              width: "100%",
              height: 520,
              objectFit: "cover",
              borderRadius: 18
            }}
          />

          <div>
            <h1 style={{ fontSize: 42 }}>
              {product.title}
            </h1>

            <p style={{ color: "#666", lineHeight: 1.7 }}>
              {product.description}
            </p>

            <button style={{
              marginTop: 20,
              padding: "14px 20px",
              border: "1px solid #111",
              background: "transparent",
              cursor: "pointer"
            }}>
              Buy now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}