import Card from "../Card/Card";
import Style from "./CardsContainer.module.css"
import { useSelector } from "react-redux"

const CardsContainer = () => {

    const countries = useSelector(state=>state.countries)


    return (
        <div className={Style.container}>
            {countries.map(country => {
                // console.log(country,"ccc")
                return <Card
                id={country.id}
                    name={country.nombre}
                    imagen={country.imagen}
                    continente={country.continente}
                    capital={country.capital}
                    subregion={country.subregion}
                    area={country.area}
                    poblacion={country.poblacion}
                    key={country.id}
                />
            })}
        </div>
    )
};

export default CardsContainer;