import ProgressBarWithLabel from './ProgressBarWithLabel';
import { useState } from "react";
import Skills from "./skills";
import '../styles/contenedorSkills.css'

function ContenedorSkills() {

    const labels = {
        1: "Trainee",
        2: "JR",
        3: "SSR",
        4: "SR"
    }

    const [valor, setValor] = useState(0)
    const [label, setLabel] = useState()
    const [visible, setVisible] = useState(false)

    const modificarValor = (miValor) => {
        setVisible(true);
        setValor(miValor * 25);
        setLabel(labels[miValor]);
    }

    return (
        <div className="ContenedorSkills">
            <Skills modificarValor={modificarValor}></Skills>
            {visible && <ProgressBarWithLabel now={valor} label={label} />}
        </div>
    );
}

export default ContenedorSkills;