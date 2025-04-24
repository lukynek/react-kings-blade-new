import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import hamburger from "../assets/hamburger.png";
import FotoHeader from "./FotoHeader";
import "./Header.css";

const Header = () => {
    const location = useLocation(); // Získání aktuální cesty

    return (
        <>
            <header>
                <div className="header-overlay"></div>
                <div class="topheader row">
                    <div className="col-6">
                            <Link to="/Hodnoceni-obchodu">Hodnocení obchodu</Link>
                            <Link to="/O-nas">O nás</Link>
                            
                    </div>
                    <div className="col-6 registr-prihlaseni">
                            <Link to="/Prihlaseni">Přihlášení</Link>
                            <Link to="/Registrace">Registrace</Link>    
                    </div>
                </div>
                <div className="header-bar">
                    <div className="col-3 logo">
                        <Link to="/">
                            <img src={logo} alt="King's Blade logo" />
                        </Link>
                    </div>

                    <nav className="col-6 navigation">
                        <Link to="/Sluzby">Služby</Link>
                        <Link to="/Galerie">Galerie</Link>
                        <Link to="/Tym">Náš tým</Link>
                        <Link to="/Kontakty">Kontakty</Link>
                    </nav>

                    <div className="col-3 reserve-button">
                        <button>Rezervovat</button>
                    </div>

                    <div className="hamburger">
                        <img id="hamburger-icon" src={hamburger} alt="Menu" />
                    </div>
                </div>
                {location.pathname === "/" && <FotoHeader />}
            </header>
           
        </>
    );
};

export default Header;
