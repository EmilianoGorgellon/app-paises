import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import HomeContext from '../context/Home/HomeContext';
import {Fade} from "react-reveal";
const Header = () => {
    const {switchTheme, FunctionSwitchTheme} = useContext(HomeContext);
    
    return (
        <Fade top>
            <header className={switchTheme ? "container--header ligth-theme" : "container--header dark-theme"}>
                <h1 className="header--title">Where in the world ?</h1> 
                <div className="container--switch-theme" onClick={FunctionSwitchTheme}>
                    <FontAwesomeIcon icon={faMoon} className="icon--moon"/>
                    <p className="label--icon-moon">Dark Mode</p>
                </div>
            </header>
        </Fade>
    )
}

export default Header
