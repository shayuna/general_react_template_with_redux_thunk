const initialState = {
    clicks:0,
    showOff:"this is true. you're a show off",
}

const itemsReducer = (state=initialState,{type,showOff}) => {
    switch (type){
        case "INCREMENT_CLICKS":
            return {...state,
                    clicks:state.clicks+1};
        case "UPDATE_SHOWOFF_TEXT":
            return {...state,
                    showOff:showOff};
        default:
            return state;
    }
}

export default itemsReducer;