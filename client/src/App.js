import logo from './logo.svg';
import './App.css';
import "bootstrap"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap"
import NavBar from './components/Navbar';
import HomeScreen from './Screens/HomeScreen';
import CartScreen from "./Screens/CartScreen";
import React from 'react';
import {Route,BrowserRouter as Router,Routes} from "react-router-dom";
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import OrdersScreen from "./Screens/OrdersScreen"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomeScreen></HomeScreen>}/>
          <Route path="/Cart" exact element={<CartScreen></CartScreen>}/>
          <Route path="/orders" exact element={<OrdersScreen></OrdersScreen>}/>
          <Route path="/login" exact element={<LoginScreen></LoginScreen>}/>
          <Route path="/register" exact element={<RegisterScreen></RegisterScreen>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
