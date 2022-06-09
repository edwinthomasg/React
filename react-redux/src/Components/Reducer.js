
let initialState = {
    noOfCookies : 20
}
const reducer = (state = initialState,action) => {
    switch(action.type){
        case 'buy_cookies' : return{
            ...state,
            noOfCookies : state.noOfCookies - 1
        }
        default : return state
    }
}

export default reducer