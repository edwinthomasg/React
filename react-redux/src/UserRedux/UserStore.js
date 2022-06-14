import { createStore } from "redux";
import UserReducer from "./user/UserReducer";
import reduxThunk from "redux-thunk"
import { applyMiddleware } from "redux";
const userStore = createStore(UserReducer,applyMiddleware(reduxThunk))

export default userStore