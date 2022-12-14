import {combineReducers} from "redux"
import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension";
import {addPizzaReducer, deletePizzaReducer, editPizzaReducer, getAllPizzasReducer, getPizzaByIdReducer} from "./reducers/Pizza";
import { addToCartReducer } from "./reducers/Cart";
import { deleteUserReducer, getAllUsersReducer, loginUserReducer, logoutUserReducer, registerUserReducer } from "./reducers/User";
import { getUserOrdersReducer, placeOrderReducer,getAllOrdersReducer, deliverOrderReducer } from "./reducers/Order";
const finalReducer=combineReducers({
    getAllPizzas:getAllPizzasReducer,
    addToCart:addToCartReducer,
    registerUser:registerUserReducer,
    loginUser:loginUserReducer,
    logoutUser:logoutUserReducer,
    placeOrder:placeOrderReducer,
    getUserOrders:getUserOrdersReducer,
    addPizza:addPizzaReducer,
    getAllOrders:getAllOrdersReducer,
    getPizzaById:getPizzaByIdReducer,
    editPizza:editPizzaReducer,
    deletePizza:deletePizzaReducer,
    deliverOrder:deliverOrderReducer,
    getAllUsers:getAllUsersReducer,
    deleteUser:deleteUserReducer,
})
const cartItems=localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[]
const user=localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null
const initialState={getAllPizzas:{pizzas:[]},addToCart:{cartItems},loginUser:{user}}
const composeEnhancers=composeWithDevTools({})
const Store=createStore(finalReducer,initialState,composeEnhancers(applyMiddleware(thunk)))

export default Store;