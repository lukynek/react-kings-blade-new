import React from "react";
import './SluzbyItem.css';

const SluzbyItemRight = ({ sluzba }) => {
    const { title, description, image, imageAlt, price } = sluzba;

    return (
        <section className="strih-right-img">
            <article className="textsluzby col-12 col-md-6">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="right-cena-button">
                    <p>{price},- Kč</p>
                    <button>Mám zájem</button>
                </div>
            </article>
            <article className="col-12 col-md-6 right-img">
                <img src={image} alt={imageAlt} />
            </article>
        </section>
    );
};

export default SluzbyItemRight;
