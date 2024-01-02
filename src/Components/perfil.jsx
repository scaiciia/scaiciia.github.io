import React, { useState } from "react";
import CollapseButton from "./collapseButton";
import Offcanvas from 'react-bootstrap/Offcanvas'
import PerfilButton from "./perfilButton";
import '../styles/perfil.css'
import PerfilExpand from "./perfilExpand";

function Perfil() {

    const [estado, setEstado] = useState(false)

    const abrir = () => setEstado(true);
    const cerrar = () => setEstado(false);

    return (
        <div className="Perfil mb-auto">
            <PerfilButton onAbrir={abrir}></PerfilButton>

            <Offcanvas className='PerfilExpand' show={estado} onhide={cerrar} responsive="md">
                <Offcanvas.Header>
                    <CollapseButton onCerrar={cerrar}></CollapseButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <PerfilExpand></PerfilExpand>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default Perfil;