import './Footer.css';
import phone from '../assets/phone.png';
import email from '../assets/email.png';
import circledLogo from '../assets/circledLogo.png';
import location from '../assets/location.png';

const Footer = () => {
  return (
    <footer>
      <article className="textfooter col-12 col-lg-6">
        <img src={circledLogo} alt="Kulaté logo King's Blade"/>
        <p>King's Blade s.r.o IČO: 0999999 Společnost je zapsaná v obchodním rejstříku vedeném Městský soudem v Praze Z 344670/MSPH</p>
      </article>
      <article className="contactfooter col-12 col-md-6 col-lg-3">
        <h3>Kontakty</h3>
        <div className="contact">
          <img src={phone} alt="telefon King's Blade"/> <a href="mailto:">+420 123 456 798</a>
        </div>
        <div className="email">
          <img src={email} alt="Email King's Blade"/> <a href="tel:+">pepicek@example.com</a>
        </div>
      </article>
      <article className="lokace col-12 col-md-6 col-lg-3">
        <h3>Kde nás najdete</h3>
        <div className="row">
          <img src={location} alt="Lokace King's Blade"/>
          <div className="footeradresa">
            <p>Želetavská 1521/1, 141 00</p>
            <p>Praha 4 - Michle</p>
          </div>
        </div>
      </article>
      <article className="col-12 copyright">
        King’s Blade © 2024 Všechna práva vyhrazena
      </article>
    </footer>
  )
}

export default Footer;
