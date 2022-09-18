import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/Navbar';
import HomeScreen from './Screens/HomeScreen';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HomeScreen></HomeScreen>
    </div>
  );
}

export default App;
