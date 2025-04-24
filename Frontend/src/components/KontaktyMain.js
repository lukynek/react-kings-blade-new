import React from "react";
import "./KontaktyMain.css";

const KontaktyMain = () => {
    return (
        <div id="kontaktovat" className="kontakt-main">
            <div className="kontakt-text">
                <h1>Kontaktujte nás</h1>
                <p>
                    <strong>IČO</strong>: 12345678
                </p>
                <p>
                    <strong>Adresa</strong>: Praha 1, 123 45
                </p>
                <p>
                    <strong>Telefon</strong>: <a href="tel:+123456789">123 456 789</a>
                </p>
                <p>
                    <strong>Email</strong>: <a href="mailto:kontakt@priklad.cz">kontakt@priklad.cz</a>
                </p>
            </div>
            <div className="kontakt-map">
                {/* Zde vložte kód pro mapu, např. Google Maps iframe nebo jinou knihovnu */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.7755064904173!2d-0.118092!3d51.509865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b8b5c4a7fb5%3A0xbfc687eb2b1f7bb6!2s10%20Downing%20Street%2C%20Westminster%2C%20London%20SW1A%200AA%2C%20United%20Kingdom!5e0!3m2!1sen!2sus!4v1608672588691!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                ></iframe>
            </div>
        </div>
    );
};

export default KontaktyMain;
