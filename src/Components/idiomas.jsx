import Idioma from "./idioma";

function Idiomas() {
    return (
        <div>
            <Idioma
                nombre="Español"
                id="Nativo"
            ></Idioma>
            <Idioma
                nombre="Inglés"
                id="A2"
            ></Idioma>
            <Idioma
                nombre="Italiano"
                id="A0"
            ></Idioma>
        </div>
    );
}

export default Idiomas;