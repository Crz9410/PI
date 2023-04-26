import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCountriesByStatus, getCountries } from "../../redux/actions";
import Paginado from "../../components/Paginado/Paginado";


const Home = () => {
    
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.countries);
    const [currentPage, setCurrentPage] = useState(1);  //guarda en estado local la pagina actual, set es una constante que setea la pagina actual, empieza en 1 por que siempre se va setear en la pagina principal.
    const [countriesPerPage, setCountriesPerPage] = useState(10) // en el estado local guardarme cuantos paises quiero por pagina.
    const indexOfLastCountries = currentPage * countriesPerPage// 1--------0 ------6//7----13
    const indexOfFirstCountries = indexOfLastCountries - countriesPerPage
    const currentcountries = allCountries.slice(indexOfFirstCountries,indexOfLastCountries);

    const handlerFilterContinet = (e)=>{
        dispatch(filterCountriesByStatus(e.target.value))
    }
    


    useEffect(() => {
        
        dispatch(getCountries());
    }, [dispatch])
    return (
        <>
        <div>
            <h1>Vista Home</h1>
            <CardsContainer currentCountry= {currentcountries} />
        </div>
        <div>
            <select>
                <option value='ascendente'>Ascendente</option>
                <option value='descendente'>Descendente</option>
            </select>
            <select onChange={e=>handlerFilterContinet(e)}>
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
        <Paginado
        setCurrentPage = {setCurrentPage}
        countriesPerPage = {countriesPerPage}
        allCountries={allCountries.length}
        // paginado={paginado}
        />
        
        </>
    )
}

export default Home;