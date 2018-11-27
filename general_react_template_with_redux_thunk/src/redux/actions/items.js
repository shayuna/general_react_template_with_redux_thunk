
export const incrementClicks = () => ({
    type:"INCREMENT_CLICKS",
})

export const updateShowOff = (sText) => ({
    type:"UPDATE_SHOWOFF_TEXT",
    showOff:sText,
})

/* it doesn't work because the url doesn't play ball. but the example is solid.*/
export const exampleWithThunk = (sName)=>{
    return (dispatch) => {
        return fetch("https://www.google.com/search?q=secret+sauce")
        .then(()=>dispatch(incrementClicks()))
        .catch((err)=>alert (err))
        .finally ((res)=>dispatch(updateShowOff("shuru buru")));
    }
}