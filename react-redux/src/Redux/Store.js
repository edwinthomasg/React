import { createStore } from "redux"
import CookieReducer from "./Cookies/CookieReducer"
import reduxLogger from 'redux-logger'
import { applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(CookieReducer,composeWithDevTools(applyMiddleware(reduxLogger)))

export default store