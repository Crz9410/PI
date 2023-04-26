import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCountriesByStatus, getCountries } from "../../redux/actions";
import Paginado from "../../components/Paginado/Paginado";
import styles from './Home.module.css';

const Home = () => {

    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);
    const [currentPage, setCurrentPage] = useState(1);  //guarda en estado local la pagina actual, set es una constante que setea la pagina actual, empieza en 1 por que siempre se va setear en la pagina principal.
    const [countriesPerPage, setCountriesPerPage] = useState(10) // en el estado local guardarme cuantos paises quiero por pagina.
    const indexOfLastCountries = currentPage * countriesPerPage
    const indexOfFirstCountries = indexOfLastCountries - countriesPerPage
    const currentcountries = allCountries.slice(indexOfFirstCountries, indexOfLastCountries);

    const handlerFilterContinet = (e) => {
        dispatch(filterCountriesByStatus(e.target.value))
    }



    useEffect(() => {

        dispatch(getCountries());
    }, [dispatch])
    return (
        <>
            <div className={styles.title}>
                <h1> Home</h1>

            </div>
            <div>
                <select className={styles.order}>
                    <option value='ascendente'>Ascendente</option>
                    <option value='descendente'>Descendente</option>
                </select>
                <select className= {styles.continent} onChange={e => handlerFilterContinet(e)}>
                    {/* Botones/Opciones para ordenar tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población. */}
                    {/* <option value="tipo">Tipo de actividades turisticas</option> */}
                    <option value="South America">Sur America</option>
                    <option value="Antarctica">Antartida</option>
                    <option value="Europe">Europa</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="All">Todos</option>

                </select>
            </div>
            <CardsContainer currentCountry={currentcountries} />
            <Paginado
                setCurrentPage={setCurrentPage}
                countriesPerPage={countriesPerPage}
                allCountries={allCountries.length}

            />

        </>
    )
}

export default Home;