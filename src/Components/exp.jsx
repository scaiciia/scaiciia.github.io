import '../styles/exp.css'
import Lista from './lista';
import { useEffect, useState } from "react";

const dictionary = {
    "ILOUNGE STORE (2014 – ACTUALIDAD)": ["Atención al público", "Cajero", "Apple Certified Macintosh Technician", "Apple Certified iOS Technician"],
    "REPARACIÓN DE PC (2009 - 2014)": ["Armado y reparación de PC en ambientes hogareños", "Instalación, configuración, mantenimiento de hardware y software", "Instalación de impresoras, scanners"]
}

function Exp({ applyStylesOnScroll }) {

    const [scrolled, setScrolled] = useState(applyStylesOnScroll);

    useEffect(() => {
        setScrolled(applyStylesOnScroll);

        return () => {

        }
    }, [applyStylesOnScroll])

    return (
        <div id='Exp' className={`Exp scrolling-exp ${scrolled ? 'scrolled-exp' : ''}`}>
            <h1 className='SeccionH1'>EXPERIENCIA LABORAL</h1>
            <Lista dic={dictionary}></Lista>
        </div>
    );
}

export default Exp;