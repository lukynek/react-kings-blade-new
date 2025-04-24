import React from "react";
import { useEffect} from "react";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import team1Image from '../assets/team_1.jpg';
import team2Image from '../assets/team_2.jpg';
import team3Image from '../assets/team_3.jpg';
import './TymHome.css';  // Pokud máš vlastní CSS soubor, nezapomeň ho importovat

const TymHome = () => {
      const location = useLocation();
      useEffect(() => {
          const hash = location.hash;
          if (hash) {
              const el = document.querySelector(hash);
              if (el) {
                  setTimeout(() => {
                      el.scrollIntoView({ behavior: "smooth" });
                  }, 0);
              }
          }
      }, [location]);
  return (
    <section className="tym-container">
      <h2 className="col-12">Kdo stojí za King's Blade</h2>
      <article className="col-12 col-md-4">
        <img src={team1Image} alt="Pavel Beran" />
        <h3>Pavel Beran</h3>
        <p>Senior barber</p>
      </article>
      <article className="col-12 col-md-4">
        <img src={team2Image} alt="Petr Vašek" />
        <h3>Petr Vašek</h3>
        <p>Junior barber</p>
      </article>
      <article className="col-12 col-md-4">
        <img src={team3Image} alt="Láďa Kužel" />
        <h3>Láďa Kužel</h3>
        <p>Beard specialist</p>
      </article>
      <div className="col-12 team-button">
        <button><Link to="/Tym#result">Chci vidět celý tým</Link></button>
      </div>
    </section>
  );
};

export default TymHome;