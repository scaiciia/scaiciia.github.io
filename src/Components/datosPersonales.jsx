import FotoPerfil from "./fotoPerfil";
import Info from "./info";
import '../styles/datosPersonales.css'

function DatosPersonales() {
    return (
        <div className="DatosPersonales">
            <FotoPerfil></FotoPerfil>
            <Info></Info>
        </div>
    );
}

export default DatosPersonales;