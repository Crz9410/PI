const Card = (props) => {
    return (
        <div>
            <p>Name:{props.name}</p>
            <img src={props.imagen} alt="Not found"/>
            <p>continente:{props.continente}</p>
            <p>capital:{props.capital}</p>
            <p>subregion:{props.subregion}</p>
            <p>area:{props.area}</p>
            <p>poblacion:{props.poblacion}</p>
            
            {/* <p>Key:{props.key}</p> */}
        </div>
    )
};

export default Card;