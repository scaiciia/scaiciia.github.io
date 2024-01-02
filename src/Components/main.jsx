import React from "react";
import Home from "./home";
import Exp from "./exp"
import '../styles/main.css'
import Formacion from "./formacion";
import Cursos from "./cursos";
import Contacto from "./contacto";
import { useEffect, useState } from "react";

function Main() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <div id="home" className={`Main scrolling-main ${scrolled ? 'scrolled-main' : ''}`}>
            <Home applyStylesOnScroll={scrolled}></Home>
            <Exp applyStylesOnScroll={scrolled}></Exp>
            <Formacion></Formacion>
            <Cursos></Cursos>
            <Contacto></Contacto>
        </div>
    );
}

export default Main;