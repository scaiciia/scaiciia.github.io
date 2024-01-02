import '../styles/button.css'

function Button(props) {

    const handleClick = () => {
        props.modificarValor(props.nivel)
    }

    return (
        <div className="Button">
            <svg xmlns="http://www.w3.org/2000/svg" height="25" width="25" viewBox="0 0 512 512" onClick={handleClick}>
                <path fill="#7286D3" d={props.valor} />
            </svg>
        </div>
    );
}

export default Button;