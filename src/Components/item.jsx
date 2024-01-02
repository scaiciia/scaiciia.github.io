import '../styles/item.css'

function Item(props) {
    console.log(props.titulo)
    console.log(props.incisos)
    return (
        <div className="Item">
            <div className="ItemHeader">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <circle cx="7.5" cy="7.5" r="7.5" fill="#8EA7E9" />
                </svg>
                <h1>{props.titulo}</h1>
            </div>
            <div className='ItemBody'>
                {props.incisos.map((value) => (
                    <div className='Inciso'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                            <circle cx="2.5" cy="2.5" r="2.5" fill="black" />
                        </svg>
                        <span>{value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Item;