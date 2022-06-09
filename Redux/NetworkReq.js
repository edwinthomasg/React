const redux = require('redux')
const axios = require('axios')
const reduxThunk = require('redux-thunk')
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = reduxThunk.default
let initialState = {
    loading : false,
    error : '',
    users : []
}

let fetchUserReq = () => {
    return {
        type : 'FETCH_USER_REQ'
    }
}
let fetchReqSuccess = user => {
    return {
        type : 'FETCH_REQ_SUCCESS',
        payload : user
    }
}
let fetchReqFail = error => {
    return {
        type : 'FETCH_REQ_FAIL',
        payload : error,
    }
}
let reducer = (state = initialState,action) => {
    switch(action.type){
        case 'FETCH_USER_REQ' : return {
            loading : true
        }
        case 'FETCH_REQ_SUCCESS' : return {
            loading : false,
            users : action.payload,
            error : ''
        }
        case 'FETCH_REQ_FAIL' : return {
            loading : false,
            error : action.payload,
            users : []
        }
    }
}
const fetchUser = () => {
    return (dispatch) => {
        dispatch(fetchUserReq())
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            let users = response.data.map(user => user.id)
            dispatch(fetchReqSuccess(users))
        })
        .catch(error => { 
            dispatch(fetchReqFail(error.message))
        })
    }
}

const store = redux.createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>console.log("updated state : ",store.getState()))
store.dispatch(fetchUser())


  