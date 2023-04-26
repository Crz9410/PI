import React from "react";
import { Link } from 'react-router-dom';
import style from'./Landing.module.css';

const Landing = () =>{
    return(
        <div className="landing-container">
            <h1>Bienvenidos a la APP Country</h1>
            <div className="button-container">
                <Link to ="/home">
                    <button>Ingresar</button>
                </Link>
            </div>
        </div>
    )
}

export default Landing;