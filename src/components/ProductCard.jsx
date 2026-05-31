export default function ProductCard({ title, brand, image, link, description }) {
  return (
    <div style={{
      background: "#fff",
      border: "1px solid #eee",
      borderRadius: 16,
      overflow: "hidden"
    }}>

      <div style={{
        overflow: "hidden"
      }}>
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: 380,
            objectFit: "cover",
            transition: "transform 0.4s ease"
          }}
          onMouseEnter={(e) => e.target.style.transform = "scale(1.06)"}
          onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
        />
      </div>

      <div style={{ padding: 18 }}>
        <div style={{ fontSize: 11, letterSpacing: 2, color: "#999" }}>
          {brand}
        </div>

        <h3 style={{ margin: "8px 0", fontWeight: 400 }}>
          {title}
        </h3>

        <p style={{ color: "#666", fontSize: 14 }}>
          {description}
        </p>

        <a
          href={link}
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: 12,
            fontSize: 12,
            letterSpacing: 2,
            textDecoration: "none",
            borderBottom: "1px solid #111",
            color: "#111"
          }}
        >
          Shop now
        </a>
      </div>
    </div>
  );
}
