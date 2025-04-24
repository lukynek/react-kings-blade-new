import React from "react";
import './SluzbyItem.css';

const SluzbyItemLeft = ({ sluzba }) => {
    const { title, description, image, imageAlt, price } = sluzba;

    return (
        <section className="strih-left-img">
            <article className="col-12 col-md-6">
                <img src={image} alt={imageAlt} />
            </article>
            <article className="textsluzby col-12 col-md-6">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="right-cena-button">
                    <p>{price},- Kč</p>
                    <button>Mám zájem</button>
                </div>
            </article>
        </section>
    );
};

export default SluzbyItemLeft;
