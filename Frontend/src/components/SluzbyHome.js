import React from 'react';
import hairImage from '../assets/hair.png';
import beardImage from '../assets/beard.png';
import bothImage from '../assets/both.png';
import './SluzbyHome.css'; 

const SluzbyHome = () => {
  return (
    <section className="list-sluzeb">
      <h2 className="col-12">Služby King's Blade</h2>
      <article className="col-12 col-md-4">
        <img src={hairImage} alt="Klasický střih" />
        <h3>Klasický střih</h3>
        <p>Střih nůžkami a strojkem, zaholení kontur, úprava obočí, stříhání klup uší, nos, vysušení, styling, na závěr kolínská …</p>
      </article>
      <article className="col-12 col-md-4">
        <img src={beardImage} alt="Holení HOT TOWEL" />
        <h3>Holení HOT TOWEL</h3>
        <p>Napaření vousů horkým ručníkem "hot towel" a tradiční oholení břitvou. Procedura je doplněná o hydratační péči, úprava obočí …</p>
      </article>
      <article className="col-12 col-md-4">
        <img src={bothImage} alt="Komplexní střih" />
        <h3>Komplexní střih</h3>
        <p>Pánský střih, holení "hot towel", a tradiční oholení břitvou. Procedura je doplněná o hydratační péči, úprava obočí, stříhání klup uší, nos …</p>
      </article>
      <div className="col-12 team-button">
        <button>Chci vidět všechny služby</button>
      </div>
    </section>
  );
};

export default SluzbyHome;
