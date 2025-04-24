import React from "react";
import QuestionSection from "../components/QuestionSection"
import HeaderSubPage from "../components/HeaderSubPage";
import KontaktyMain from "../components/KontaktyMain";
const Kontakty = () => {
    return (
        <main>
             <HeaderSubPage title="Kontakty" />
             <KontaktyMain></KontaktyMain>
            <QuestionSection></QuestionSection>
        </main>
    )
};

export default Kontakty;