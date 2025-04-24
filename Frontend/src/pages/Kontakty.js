import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import QuestionSection from "../components/QuestionSection";
import HeaderSubPage from "../components/HeaderSubPage";
import KontaktyMain from "../components/KontaktyMain";

const Kontakty = () => {
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
      <HeaderSubPage title="Kontakty" />
      <KontaktyMain />
    </main>
  );
};

export default Kontakty;