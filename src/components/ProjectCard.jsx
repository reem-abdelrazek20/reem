// src/components/Card.jsx
import React, { useState } from "react";
import "../style/card.css";

export default function Card({ title, copy, link, backgroundImage }) {
    const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };
  return (
    <div
      className={`card ${isActive ? "active" : ""}`}
          onClick={toggleActive}  
      style={{
        backgroundImage: `url(${backgroundImage} )`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay"></div>
      <div className="content">
        <h2 className="title">{title}</h2>
        <p className="copy">{copy}</p>
        <a className="btn" href={link}>
          معرفة المزيد
        </a>
      </div>
    </div>
  );
}
