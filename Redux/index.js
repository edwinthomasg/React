let redux = require('redux')

let createStore = redux.createStore

let actionCookies = {
    type : 'buy_cookies'
}
let actionCandies = {
    type : 'buy_candies'
}

const actionCreatorCandies = () => actionCandies
const actionCreatorCookies = () => actionCookies

let initialState = {
    noOfCookies : 20,
    noOfCandies : 30
}

let reducer = (state = initialState,action) => {
    switch(action.type){
        case 'buy_cookies' : return {
            ...state,
            noOfCookies : state.noOfCookies - 1
        }
        case 'buy_candies' : return {
            ...state,
            noOfCandies : state.noOfCandies - 1
        }
        default : return state
    }
}
let store = createStore(reducer)
console.log(store.getState()) /**to get the state value */
let unsubscribe = store.subscribe(() => console.log("updated state: ",store.getState()))
store.dispatch(actionCreatorCookies())
store.dispatch(actionCreatorCookies())
store.dispatch(actionCreatorCandies())
store.dispatch(actionCreatorCandies())
unsubscribe()
