import {combineReducers} from "redux"
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension";
import {getAllPizzasReducer} from "./reducers/Pizza";
import { addToCartReducer } from "./reducers/Cart";
const finalReducer=combineReducers({
    getAllPizzas:getAllPizzasReducer,
    addToCart:addToCartReducer,
})
const cartItems=localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]
const initialState={getAllPizzas:{pizzas:[]},addToCart:{cartItems}}
const composeEnhancers=composeWithDevTools({})
const Store=createStore(finalReducer,initialState,composeEnhancers(applyMiddleware(thunk)))

export default Store;