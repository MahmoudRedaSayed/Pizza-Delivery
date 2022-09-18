import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/Navbar';
import HomeScreen from './Screens/HomeScreen';
import React from 'react';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomeScreen></HomeScreen>
    </div>
  );
}

export default App;
