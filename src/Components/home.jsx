import Illustrator from "./illustrator";
import Titulo from "./titulo";
import '../styles/home.css'
import { useEffect, useState } from "react";


function Home({ applyStylesOnScroll }) {

    const [scrolled, setScrolled] = useState(applyStylesOnScroll);

    useEffect(() => {
        setScrolled(applyStylesOnScroll);

        return () => {

        }
    }, [applyStylesOnScroll])

    return (
        <div className={`Home scrolling-home ${scrolled ? 'scrolled-home' : ''}`}>
            <Illustrator applyStylesOnScroll={applyStylesOnScroll}></Illustrator>
            <Titulo></Titulo>
        </div>
    );
}

export default Home