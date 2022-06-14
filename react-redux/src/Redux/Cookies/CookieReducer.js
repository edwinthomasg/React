let initialState = {
    noOfCookies : 50
}
const CookieReducer = (state = initialState,action) => {
    switch(action.type){
        case 'BUY_COOKIES' : return{
            ...state,
            noOfCookies : state.noOfCookies - action.payLoad
        }
        default : return state
    }
}

export default CookieReducer