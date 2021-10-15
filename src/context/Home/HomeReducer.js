import {GET_SWITCH_THEME, GET_RENDER_PAGE, GET_DATA} from "../type.js";

const HomeReducer = (state, action) => {
    const {type, payload} = action;
    switch(type){
        case GET_SWITCH_THEME:
            return {
                ...state,
                switchTheme: payload
            }
        case GET_RENDER_PAGE:
            return {
                ...state,
                countrySelected: payload
            }
        case GET_DATA: 
            return {
                ...state,
                dataJson: payload
            }
        default: 
            return { ...state }
    }

}

export default HomeReducer;