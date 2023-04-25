import React from "react";
const Card = (props) => {
    console.log(props,)
    return (
        <div key={props.id}>
            <p>Name:{props.nombre}</p>
            <img src={props.imagen} alt="Not found"/>
            <p>continente:{props.continente}</p>
            <p>capital:{props.capital}</p>
            <p>subregion:{props.subregion}</p>
            <p>area:{props.area}</p>
            <p>poblacion:{props.poblacion}</p>
            
        </div>
    )
};

export default Card;