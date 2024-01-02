import '../styles/illustrator.css'
import { useEffect, useState } from "react";

function Illustrator({ applyStylesOnScroll }) {
    const [scrolled, setScrolled] = useState(applyStylesOnScroll);

    useEffect(() => {
        setScrolled(applyStylesOnScroll);

        return () => {

        }
    }, [applyStylesOnScroll])
    return (
        <div>
            <svg className={`Illustrator scrolling-illustrator ${scrolled ? 'scrolled-illustrator' : ''}`} xmlns="http://www.w3.org/2000/svg" width="241" height="180" viewBox="0 0 241 180">
                <ellipse cx="126.614" cy="79.7723" rx="126.614" ry="79.7723" transform="matrix(0.900419 -0.435024 0.481418 0.876491 -32 75.1606)" fill="#8EA7E9" />
            </svg>
        </div>
    );
}

export default Illustrator;