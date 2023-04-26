import Card from "../Card/Card";
import Style from "./CardsContainer.module.css"
// import { useSelector } from "react-redux"

const CardsContainer = ({ currentCountry }) => {




    return (

        <div className={Style.container}>
            {currentCountry.map(country => {

                return (
                    <div className={Style.card} key={country.cca3}>
                        <Card

                            id={country.id}
                            nombre={country.name.common}
                            imagen={country.flags[0]}
                            continente={country.continents[0]}
                            capital={country.capital}
                            subregion={country.subregion}
                            area={country.area}
                            poblacion={country.population}

                        />
                    </div>
                )

            })}
        </div>
    )
};

export default CardsContainer;