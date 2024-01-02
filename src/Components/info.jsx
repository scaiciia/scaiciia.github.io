import Dato from "./dato";
import '../styles/info.css'

function Info() {
    return (
        <div className="Info">
            <Dato titulo="Edad" dato="33 años"></Dato>
            <Dato titulo="Localidad" dato="La Plata, Bs.As."></Dato>
            <Dato titulo="Nacionalidad" dato="Argentino - Italiano"></Dato>
        </div>
    );
}

export default Info;