import React from "react";
import QuestionSection from "../components/QuestionSection"
import HeaderSubPage from "../components/HeaderSubPage";
import TymMain from "../components/TymMain";
const Tym = () => {
    return (
        <main>
            <HeaderSubPage title="Náš Tým" />
            <TymMain></TymMain>
            <QuestionSection></QuestionSection>
        </main>
    )
};

export default Tym;