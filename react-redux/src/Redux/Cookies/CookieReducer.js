let initialState = {
    noOfCookies : 50
}
const CookieReducer = (state = initialState,action) => {
    console.log("hello")
    switch(action.type){
        case 'BUY_COOKIES' : return{
            noOfCookies : state.noOfCookies - 1
        }
        default : return state
    }
}

export default CookieReducer