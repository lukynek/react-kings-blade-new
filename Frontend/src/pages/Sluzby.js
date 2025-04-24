import React from "react";
import SluzbyItemLeft from "../components/SluzbyItemLeft";
import SluzbyItemRight from "../components/SluzbyItemRight";
import QuestionSection from "../components/QuestionSection";
import sluzbyfoto1 from "../assets/strih_foto_1.png";

const Sluzby = () => {
    const sluzby = [
        {
            id: 1,
            title: "Klasické stříhání",
            description: "Naše klasické stříhání zahrnuje precizní práci s nůžkami a strojkem, abychom dosáhli požadovaného tvaru a stylu vlasů. Tento služba je ideální pro každodenní údržbu a zajišťuje, že budete vypadat vždy svěže a upraveně.",
            image: sluzbyfoto1,
            imageAlt: "Klasické stříhání",
            price: "499",
        },
        {
            id: 2,
            title: "Úprava vlasů",
            description: "Tato služba zahrnuje různé techniky úpravy vlasů podle vašich přání. Ať už jde o kulmování, žehlení, nebo styling pro speciální příležitost, naši stylisté se postarají o to, abyste vypadali perfektně.",
            image: sluzbyfoto1,
            imageAlt: "Úprava vlasů",
            price: "299",
        },
        {
            id: 3,
            title: "Barvení vlasů",
            description: "Barvení vlasů je ideální pro každého, kdo chce změnit svůj vzhled nebo zakrýt šediny. Používáme kvalitní a dlouhotrvající barvy, které zajišťují nádherný vzhled a zdravý lesk. Vybírejte z široké palety barev, které odpovídají vašemu stylu.",
            image: sluzbyfoto1,
            imageAlt: "Barvení vlasů",
            price: "699",
        },
        {
            id: 4,
            title: "Trvalá ondulace",
            description: "Pokud toužíte po krásných vlnách, trvalá ondulace je ideální volba. Tato služba vám poskytne dlouhotrvající vlny, které budou vaše vlasy oživovat a dodávat jim objem. Perfektní volba pro ty, kteří chtějí mít vlny po celý rok.",
            image: sluzbyfoto1,
            imageAlt: "Trvalá ondulace",
            price: "899",
        },
    ];

    return (
        <div>
            <main>
                <section className="h1-sluzby-gallery-tym col-12">
                    <h1>Služby King's Blade</h1>
                </section>

                {sluzby.map((sluzba, index) => (
                    index % 2 === 0 ? (
                        <SluzbyItemLeft key={sluzba.id} sluzba={sluzba} />
                    ) : (
                        <SluzbyItemRight key={sluzba.id} sluzba={sluzba} />
                    )
                ))}

                <QuestionSection />
            </main>
        </div>
    );
};

export default Sluzby;
