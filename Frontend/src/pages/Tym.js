import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import QuestionSection from "../components/QuestionSection"
import HeaderSubPage from "../components/HeaderSubPage";
import TymMain from "../components/TymMain";
const Tym = () => {
    const location = useLocation();
    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const el = document.querySelector(hash);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: "smooth" });
                }, 0);
            }
        }
    }, [location]);
    return (
        <main>
            <HeaderSubPage title="Náš Tým" />
            <TymMain></TymMain>
            <QuestionSection></QuestionSection>
        </main>
    )
};

export default Tym;