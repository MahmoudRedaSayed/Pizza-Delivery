import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/Navbar';
import HomeScreen from './Screens/HomeScreen';
import CartScreen from "./Screens/CartScreen";
import React from 'react';
import {Route,BrowserRouter as Router,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomeScreen></HomeScreen>}/>
          <Route path="/Cart" exact element={<CartScreen></CartScreen>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
