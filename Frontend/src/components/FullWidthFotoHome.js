import React from 'react';
import foto1 from '../assets/foto_1.jpg';
import foto2 from '../assets/foto_2.jpg';
import foto3 from '../assets/foto_3.jpg';
import foto4 from '../assets/foto_4.jpg';
import foto5 from '../assets/foto_5.jpg';
import "./FullWidthFotoHome.css"
const FullWidthFotoHome = () => {
  return (
    <section id="sluzby" className="foto-full-width">
      <img src={foto1} alt="Foto 1" />
      <img src={foto2} alt="Foto 2" />
      <img src={foto3} alt="Foto 3" />
      <img src={foto4} alt="Foto 4" />
      <img src={foto5} alt="Foto 5" />
    </section>
  );
};

export default FullWidthFotoHome;
