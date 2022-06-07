let redux = require('redux')
let reduxlogger = require('redux-logger')
let createLogger = reduxlogger.createLogger()
let createStore = redux.createStore
let applyMiddleware = redux.applyMiddleware
let actionCookies = {
    type : 'buy_cookies'
}
let actionCandies = {
    type : 'buy_candies'
}

const actionCreatorCandies = () => actionCandies
const actionCreatorCookies = () => actionCookies

let cookiesInitialState = {
    noOfCookies : 20
}

let candiesInitialState = {
    noOfCandies : 20
}
let cookiesReducer = (state = cookiesInitialState,action) => {
    switch(action.type){
        case 'buy_cookies' : return {
            ...state,
            noOfCookies : state.noOfCookies - 1
        }
        default : return state
    }
}
let candiesReducer = (state = candiesInitialState,action) => {
    switch(action.type){
        case 'buy_candies' : return {
            ...state,
            noOfCandies : state.noOfCandies - 1
        }
        default : return state
    }
}

let rootReducer = redux.combineReducers({cookie : cookiesReducer,candy : candiesReducer})
let store = createStore(rootReducer,applyMiddleware(createLogger))
console.log(store.getState()) /**to get the state value */
let unsubscribe = store.subscribe(() => {})
store.dispatch(actionCreatorCookies())
store.dispatch(actionCreatorCookies())
store.dispatch(actionCreatorCandies())
store.dispatch(actionCreatorCandies())
unsubscribe()
