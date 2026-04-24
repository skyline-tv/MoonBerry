import { useState } from "react";

const products = ["Perfume", "Haircare", "Nail Beauty", "Body Essentials"];

export default function App() {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <div className="floating-elements" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, index) => (
          <span className="float-item" key={index}></span>
        ))}
      </div>

      <div className="container">
        <div className="logo-wrap">
          {!logoFailed && (
            <img
              className="logo-img"
              src="/logo.png"
              alt="Moonberry"
              onError={() => setLogoFailed(true)}
            />
          )}
          <div className={`logo-text ${logoFailed ? "show" : ""}`}>MOONBERRY</div>
        </div>

        <p className="luxury-badge">Luxury Beauty House</p>
        <div className="divider"></div>
        <p className="tagline">Coming Soon</p>
        <p className="description">
          Designed for women, Moonberry brings together signature fragrances,
          nourishing haircare, nail favorites, and everyday beauty essentials in
          one refined collection.
        </p>
        <ul className="product-list">
          {products.map((product) => (
            <li className="product-pill" key={product}>
              {product}
            </li>
          ))}
        </ul>
        <p className="premium-note">
          Crafted to feel indulgent, made to become your daily ritual.
        </p>
      </div>
    </>
  );
}
