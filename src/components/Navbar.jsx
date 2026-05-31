import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();

  const toggle = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div style={{
      position: "sticky",
      top: 0,
      background: "rgba(255,255,255,0.85)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid #eee",
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "16px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>

        {/* LOGO */}
        <div style={{ letterSpacing: 3, cursor: "pointer" }}
          onClick={() => navigate("/")}>
          ACTIVE ELEGANCE
        </div>

        {/* NAV */}
        <div style={{ display: "flex", gap: 30, fontSize: 13, position: "relative" }}>

          {/* SHOP */}
          <div style={{ position: "relative" }}>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => toggle("shop")}
            >
              Shop
            </span>

            {openMenu === "shop" && (
              <div style={{
                position: "absolute",
                top: 30,
                left: 0,
                background: "white",
                border: "1px solid #eee",
                borderRadius: 12,
                padding: 12,
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                minWidth: 160
              }}>
                <div style={{ padding: 8, cursor: "pointer" }}>All Products</div>
                <div style={{ padding: 8, cursor: "pointer" }}>Best Sellers</div>
                <div style={{ padding: 8, cursor: "pointer" }}>New In</div>
              </div>
            )}
          </div>

          {/* COLLECTIONS */}
          <div style={{ position: "relative" }}>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => toggle("collections")}
            >
              Collections
            </span>

            {openMenu === "collections" && (
              <div style={{
                position: "absolute",
                top: 30,
                left: 0,
                background: "white",
                border: "1px solid #eee",
                borderRadius: 12,
                padding: 12,
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                minWidth: 160
              }}>
                <div style={{ padding: 8, cursor: "pointer" }}>Yoga</div>
                <div style={{ padding: 8, cursor: "pointer" }}>Everyday</div>
                <div style={{ padding: 8, cursor: "pointer" }}>Premium</div>
              </div>
            )}
          </div>

          {/* ABOUT */}
          <div style={{ position: "relative" }}>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => toggle("about")}
            >
              About
            </span>

            {openMenu === "about" && (
              <div style={{
                position: "absolute",
                top: 30,
                left: 0,
                background: "white",
                border: "1px solid #eee",
                borderRadius: 12,
                padding: 12,
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                minWidth: 180
              }}>
                <div style={{ padding: 8, cursor: "pointer" }}>Brand Story</div>
                <div style={{ padding: 8, cursor: "pointer" }}>Sustainability</div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

