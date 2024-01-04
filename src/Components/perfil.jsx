import React, { useState } from "react";
import CollapseButton from "./collapseButton";
import PerfilButton from "./perfilButton";
import '../styles/perfil.css'
import PerfilExpand from "./perfilExpand";
import { Drawer } from "@mui/material";

function Perfil() {

    const [estado, setEstado] = useState(false)

    const abrir = () => setEstado(true);
    const cerrar = () => setEstado(false);

    return (
        <div className="Perfil mb-auto">
            <PerfilButton onAbrir={abrir}></PerfilButton>

            <Drawer variant="temporary" open={estado} onClose={cerrar} ModalProps={{ keepMounted: true, }} sx={{ display: { xs: 'block', sm: 'none' }, width: '250px' }}>
                <CollapseButton onCerrar={cerrar}></CollapseButton>
                <PerfilExpand></PerfilExpand>
            </Drawer>
            <Drawer variant="permanent" sx={{ display: { xs: 'none', sm: 'block' } }} PaperProps={{ sx: { borderRight: '2px solid #8EA7E9' } }}>
                <PerfilExpand></PerfilExpand>
            </Drawer>
        </div>
    );
}

export default Perfil;