import { useEffect } from "react";
import close from '../assets/hamburger.png';
import open from '../assets/close.png';
const useHamburgerMenu = () => {
    useEffect(() => {
        const hamburger = document.querySelector(".hamburger");
        const hamburgerIcon = document.getElementById("hamburger-icon");
        const navigationMenu = document.querySelector(".navigation");
        const reserveButton = document.querySelector(".reserve-button");
        const overlay = document.querySelector(".header-overlay");
        const body = document.body;

        let scrollPosition = 0;

        if (!hamburger || !hamburgerIcon || !navigationMenu || !overlay) return;

        const toggleMenu = () => {
            if (hamburgerIcon.dataset.state === "closed") {
                scrollPosition = window.scrollY;

                hamburgerIcon.src = open;
                hamburgerIcon.dataset.state = "open";
                navigationMenu.classList.add("open");
                reserveButton?.classList.add("open");
                overlay.classList.add("open");

                body.style.position = 'fixed';
                body.style.top = `-${scrollPosition}px`;
                body.style.width = '100%';
            } else {
                hamburgerIcon.src = close;
                hamburgerIcon.dataset.state = "closed";
                navigationMenu.classList.remove("open");
                reserveButton?.classList.remove("open");
                overlay.classList.remove("open");

                body.style.position = '';
                body.style.top = '';
                body.style.width = '';

                window.scrollTo(0, scrollPosition);
            }
        };

        const closeMenu = () => {
            hamburgerIcon.src = open;
            hamburgerIcon.dataset.state = "closed";
            navigationMenu.classList.remove("open");
            reserveButton?.classList.remove("open");
            overlay.classList.remove("open");

            body.style.position = '';
            body.style.top = '';
            body.style.width = '';

            window.scrollTo(0, scrollPosition);
        };

        hamburger.addEventListener("click", toggleMenu);
        overlay.addEventListener("click", closeMenu);

        return () => {
            hamburger.removeEventListener("click", toggleMenu);
            overlay.removeEventListener("click", closeMenu);
        };
    }, []);
};

export default useHamburgerMenu;
