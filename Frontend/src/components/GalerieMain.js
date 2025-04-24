import React from "react";
import foto1 from "../assets/foto_1.jpg";
import foto2 from "../assets/foto_2.jpg";
import foto3 from "../assets/foto_3.jpg";
import foto4 from "../assets/foto_4.jpg";
import foto5 from "../assets/foto_5.jpg";
import "./GalerieMain.css"
const obrazky = [foto1, foto2, foto3, foto4, foto5, foto1, foto2, foto3, foto4, foto5, foto1, foto2];

const GalerieMain = () => {
  return (
    <section className="gallery">
      {obrazky.map((obrazek, index) => (
        <img
          key={index}
          src={obrazek}
          alt={`Galerie obrazek ${index + 1}`}
        />
      ))}
    </section>
  );
};

export default GalerieMain;