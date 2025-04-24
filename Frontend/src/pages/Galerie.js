import React from "react";
import QuestionSection from "../components/QuestionSection"
import HeaderSubPage from "../components/HeaderSubPage";
import GalerieMain from "../components/GalerieMain";
const Galerie = () => {
    return (
        <main>
             <HeaderSubPage title="Galerie" />
             <GalerieMain></GalerieMain>
            <QuestionSection></QuestionSection>
        </main>
    )
};

export default Galerie;