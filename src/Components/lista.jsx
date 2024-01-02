import '../styles/lista.css'
import Item from './item';


function Lista(props) {

    if (!props.dic) {
        // Si no existe, puedes manejar el caso de alguna manera o simplemente salir de la función
        return null; // o puedes retornar algún mensaje indicando que no hay datos
    }

    // Ahora puedes usar Object.entries de manera segura
    Object.entries(props.dic).map(([key, value]) => console.log(key));
    return (
        <div className='Lista'>
            <div className="Barra"></div>
            <div className='Cuerpo'>
                {Object.entries(props.dic).map(([key, value]) => (
                    <Item titulo={key} incisos={value}></Item>
                ))}
            </div>
        </div>
    );
}

export default Lista;