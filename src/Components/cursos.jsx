import '../styles/cursos.css'
import Lista from './lista';

const dictionary = {
    "PROCESAMIENTO DE DATOS CON PYTHON": ["Argentina Programa 4.0 – 2023"],
    "PRIMEROS PASOS DEL DESARROLLO FRONTEND": ["Argentina Programa 4.0 – 2023"],
    "CURSO iOS Y SWIFT": ["Dictado por Juan Villalvazo y Brais Moure", "Udemy – 2022"],
    "CURSO DE DESARROLLO WEB EN PYTHON & DJANGO": ["Dictado por Luciano Pueyo", "Telecom Digit@lers – 2021"]
}

function Cursos() {
    return (
        <div className="Cursos">
            <h1 className='SeccionH1'>FORMACIÓN</h1>
            <h1 className='CursosH1'>CURSOS</h1>
            <Lista dic={dictionary}></Lista>
        </div>
    );
}

export default Cursos;