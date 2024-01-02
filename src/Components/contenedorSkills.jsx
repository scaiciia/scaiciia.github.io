import ProgressBar from "react-bootstrap/esm/ProgressBar";
import { useState } from "react";
import Skills from "./skills";
import '../styles/contenedorSkills.css'

function ContenedorSkills() {

    const [valor, setValor] = useState(0)
    const [visible, setVisible] = useState(false)

    const modificarValor = (miValor) => {
        setVisible(true)
        setValor(miValor * 25);
    }

    return (
        <div className="ContenedorSkills">
            <Skills modificarValor={modificarValor}></Skills>
            {visible && <ProgressBar className="ProgressBar" variant="custom" now={valor}></ProgressBar>}
        </div>
    );
}

export default ContenedorSkills;