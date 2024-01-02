import ContenedorIdiomas from "./contenedorIdiomas";
import DatosPersonales from "./datosPersonales";
import ContenedorSkills from "./contenedorSkills";
import DescargaCV from "./descargaCV";
import Redes from "./redes";
import '../styles/perfilExpand.css'

function PerfilExpand() {
    return (
        <div className="PerfilExpand">
            <DatosPersonales></DatosPersonales>
            <ContenedorIdiomas></ContenedorIdiomas>
            <ContenedorSkills></ContenedorSkills>
            <DescargaCV></DescargaCV>
            <Redes></Redes>
        </div>
    );
}

export default PerfilExpand;