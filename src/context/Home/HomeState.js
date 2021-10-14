
// Funcion para switch theme darrk o ligth
// funcion para mandar de detalles del pais seleccionado a los paises alrededores

import React, { useReducer, useState } from "react";
import HomeReducer from "./HomeReducer.js";
import HomeContext from "./HomeContext";
import axios from "axios";
const HomeState = (props) => {
    const initialState = {
        switchTheme: false,
        countrySelected: "",
        dataJson: []
    }
    const getData = async () => {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const datas = await response.data;
        dispatch({
            type:"GET_DATA",
            payload: datas
        })
    }
    const [state, dispatch] = useReducer(HomeReducer, initialState)
    const FunctionSwitchTheme = () => {
        dispatch({
            type: "GET_SWITCH_THEME",
            payload: state.switchTheme === true ? false : true
        })
    }
    const FunctionCountrySelected = () => {
        
    }
    return (
        <HomeContext.Provider value={{ 
            switchTheme: state.switchTheme,
            countrySelected : state.countrySelected,
            dataJson: state.dataJson,
            getData,
            FunctionSwitchTheme,
            FunctionCountrySelected
        }}>

            {props.children}
        </HomeContext.Provider>
    )
}

export default HomeState;