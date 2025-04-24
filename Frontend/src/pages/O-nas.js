import React from "react";
import QuestionSection from "../components/QuestionSection"
import HeaderSubPage from "../components/HeaderSubPage";
import OnasMain from "../components/OnasMain";
const Onas = () => {
    return (
        <main>
             <HeaderSubPage title="O nás" />
             <OnasMain></OnasMain>
            <QuestionSection></QuestionSection>
        </main>
    )
};

export default Onas;