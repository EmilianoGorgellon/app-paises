import React, { useReducer } from "react";
import HomeReducer from "./HomeReducer.js";
import HomeContext from "./HomeContext";
import axios from "axios";
const HomeState = (props) => {
    const initialState = {
        switchTheme: false,
        render: false,
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
    const RenderPage = () => {
        dispatch({
            type: "GET_RENDER_PAGE", 
            payload: state.render === true ? false : true
        })
    }
    return (
        <HomeContext.Provider value={{ 
            switchTheme: state.switchTheme,
            render : state.render,
            dataJson: state.dataJson,
            getData,
            FunctionSwitchTheme,
            RenderPage
        }}>

            {props.children}
        </HomeContext.Provider>
    )
}

export default HomeState;