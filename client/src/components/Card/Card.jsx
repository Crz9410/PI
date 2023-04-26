import React from "react";
import styles from './Card.module.css';
const Card = (props) => {

    return (
        <div className={styles.card}  key={props.id}>
            <p>Nombre:{props.nombre}</p>
            <img src={props.imagen} alt="Not found"/>
            <p>Continente:{props.continente}</p>
            <p>Capital:{props.capital}</p>
            <p>Subregion:{props.subregion}</p>
            <p>Area:{props.area}</p>
            <p>Poblacion:{props.poblacion}</p>
            
        </div>
    )
};

export default Card;