import { useState } from 'react';
import '../styles/idioma.css'
import ProgressBarWithLabel from './ProgressBarWithLabel';

function Idioma(props) {
    const [dictionary] = useState({
        "A0": 0,
        "A1": 1,
        "A2": 2,
        "B1": 3,
        "B2": 4,
        "C1": 5,
        "C2": 6,
        "Nativo": 7
    })
    const clave = props.id;
    const obtenerValor = (clave) => {
        return dictionary[clave] === 0 ? 5 : dictionary[clave] * 14.285714285714286;
    };
    const valorActual = obtenerValor(clave);
    return (
        <div className='Idioma'>
            <span>{props.nombre}</span>
            <ProgressBarWithLabel now={valorActual} label={clave} />
        </div>
    );
}

export default Idioma;