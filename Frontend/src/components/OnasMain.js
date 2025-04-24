import React from "react";
import "./OnasMain.css";
import obrazek from "../assets/team_3.jpg";

const OnasMain = () => {
    return (
        <div className="onas-main">
            <div className="onas-text">
                <p>
                    Jsme inovativní společnost specializující se na kvalitní webové služby. Naším cílem je přinášet nejlepší řešení na míru pro růst našich klientů.
                </p>
                <p>
                    S více než 10 lety zkušeností v oblasti webových aplikací, e-commerce a digitálního marketingu spolupracujeme s firmami napříč různými odvětvími.
                </p>
                <p>
                    <strong>Naše vize:</strong> Být lídrem v oblasti webových technologií a pomáhat klientům růst na globálním trhu.
                </p>
            </div>
            <div className="onas-image">
                <img
                    src={obrazek}
                    alt="Tým společnosti"
                />
            </div>
        </div>
    );
};

export default OnasMain;
