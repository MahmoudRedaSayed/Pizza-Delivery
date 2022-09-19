import {combineReducers} from "redux"
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension";
import {getAllPizzasReducer} from "./reducers/Pizza";
const finalReducer=combineReducers({
    getAllPizzas:getAllPizzasReducer
})

const initialState={getAllPizzas:{pizzas:[]}}
const composeEnhancers=composeWithDevTools({})
const Store=createStore(finalReducer,initialState,composeEnhancers(applyMiddleware(thunk)))

export default Store;