import Card from "../Card/Card";
import Style from "./CardsContainer.module.css"
import { useSelector } from "react-redux"

const CardsContainer = () => {

    const countries = useSelector(state=>state.countries)


    return (
        <div className={Style.container}>
            {countries.map(country => {
                
                return <Card
                id={country.id}
                    nombre={country.name.common}
                    imagen={country.flags[0]}
                    continente={country.continents[0]}
                    capital={country.capital}
                    subregion={country.subregion}
                    area={country.area}
                    poblacion={country.population}
                    key={country.cca3}
                />
            })}
        </div>
    )
};

export default CardsContainer;