import '../styles/formacion.css'
import Lista from './lista';

const dictionary = {
    "UNLP – FACULTAD DE INFORMÁTICA": ["Analista Programador Universitario", "2018 – actualidad"],
    "UTN – FACULTAD REGIONAL LA PLATA": ["Ingeniería en Sistemas de la Información", "2009 – 2015 (Incompleta)"],
    "E.E.A. Nº1 - ARRECIFES": ["Técnico en Producción agropecuaria", "2006 – 2008"]
}

function Formacion() {
    return (
        <div id='Formacion' className="Formacion">
            <h1 className='SeccionH1'>FORMACIÓN</h1>
            <h1 className='EducacionH1'>EDUCACIÓN</h1>
            <Lista dic={dictionary}></Lista>
        </div>
    );
}

export default Formacion;