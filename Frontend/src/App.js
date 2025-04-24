import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import QuestionSection from "./components/QuestionSection";
import useHamburgerMenu from "./scripts/hamburger";
import Sluzby from "./pages/Sluzby";
import Galerie from "./pages/Galerie";
import Tym from "./pages/Tym";
import Kontakty from "./pages/Kontakty";
import SluzbyHome from "./components/SluzbyHome";
import FullWidthFotoHome from "./components/FullWidthFotoHome";
import TextContainerHome from "./components/TextContainerHome";
import TymHome from "./components/TymHome";
import Onas from "./pages/O-nas";
import Prihlaseni from "./pages/Prihlaseni";
import Registrace from "./pages/Registrace";
import Hodnoceniobchodu from "./pages/Hodnoceni-obchodu";
const AppContent = () => {
  const location = useLocation();
  useHamburgerMenu();

  const hideLayoutRoutes = ["/prihlaseni", "/registrace"];
  const hideLayout = hideLayoutRoutes.includes(location.pathname.toLowerCase());

  return (
    <>
      {!hideLayout && <Header />}
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <SluzbyHome />
              <FullWidthFotoHome />
              <TextContainerHome />
              <TymHome />
              <QuestionSection />
            </main>
          }
        />
        <Route path="/Sluzby" element={<Sluzby />} />
        <Route path="/Galerie" element={<Galerie />} />
        <Route path="/Tym" element={<Tym />} />
        <Route path="/Kontakty" element={<Kontakty />} />
        <Route path="/O-nas" element={<Onas />} />

        <Route path="/prihlaseni" element={<Prihlaseni />} />
        <Route path="/registrace" element={<Registrace />} />
        <Route path="/Hodnoceni-obchodu" element={<Hodnoceniobchodu />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
