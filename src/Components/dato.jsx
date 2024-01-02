import '../styles/dato.css'

function Dato(props) {
    return (
        <div className="Dato">
            <span>{props.titulo}: {props.dato}</span>
        </div>
    );
}

export default Dato;