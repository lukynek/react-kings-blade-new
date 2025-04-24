import React from "react";
import team1 from "../assets/team_1.jpg";
import team2 from "../assets/team_2.jpg";
import team3 from "../assets/team_3.jpg";
import "./TymMain.css"

const clenoveTymu = [
  {
    jmeno: "Petr Vašek",
    pozice: "Majitel",
    obrazek: team2,
    popis: "Jmenuji se Petr Vašek a jsem barberem už více než šest let. Mám zkušenosti s tradičními i moderními střihy a vždy se snažím přistupovat k každému klientovi individuálně. Můj cíl je poskytnout vám skvělý zážitek a dokonale upravený vzhled.",
  },
  {
    jmeno: "Jeník Švestka",
    pozice: "Beard specialist",
    obrazek: team3,
    popis: "Jsem specialista na úpravu vousů a precizní střihy. Mám hluboké znalosti o různých stylech vousů a vždy se snažím vytvářet unikátní a stylové vzhledy pro každého klienta. Mou vášní je péče o vousy a jejich dokonalý tvar.",
  },
  {
    jmeno: "Honza Hrouda",
    pozice: "Senior barber",
    obrazek: team1,
    popis: "Mám dlouholeté zkušenosti s klasickými i moderními střihy. Rád se zaměřuji na detail a vytvářím styl, který vyhovuje individuálním potřebám každého klienta. Když přijdete do mého křesla, můžete se těšit na perfektní střih, který bude ladit s vaším životním stylem.",
  },
  {
    jmeno: "Lukáš Mareš",
    pozice: "Beard",
    obrazek: team1,
    popis: "Zaměřuji se na styling vousů a moderní střihy. Mám bohaté zkušenosti s tvarováním vousů, včetně péče a poradenství, jak dosáhnout ideálního vzhledu. Pracuji s precizností a pečlivostí, abyste odcházeli s pocitem spokojenosti a sebevědomí.",
  }
];

const TymItem = ({ clen }) => {
  return (
    <article className="col-12 col-md-6">
      <div className="tymitem">
        <img src={clen.obrazek} alt={clen.jmeno} />
        <h2>{clen.jmeno}</h2>
        <h3>{clen.pozice}</h3>
        <p>{clen.popis}</p>
      </div>
    </article>
  );
};

const TymMain = () => {
  return (
    <section className="tym">
      {clenoveTymu.map((clen, index) => (
        <TymItem key={index} clen={clen} />
      ))}
    </section>
  );
};

export default TymMain;
