import React from "react";
import QuestionSection from "../components/QuestionSection"
import HeaderSubPage from "../components/HeaderSubPage";
import RatingOverview from "../components/RatingOverview.js";
const HodnoceniObchodu = () => {
    return (
        <main>
             <HeaderSubPage title="Hodnocení obchodu" />
             <RatingOverview></RatingOverview>
            <QuestionSection></QuestionSection>
        </main>
    )
};

export default HodnoceniObchodu;