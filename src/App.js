// import logo from './logo.svg';
// import "./App.css";
import Navbar from "./Components/Navbar";
import Menu from "./Routers/Menu";

function App() {
  return (
    <div className="App">
      <div className="navbar-header">
        <Navbar />
      </div>
      <div className="content-page">
        <Menu />
      </div>
    </div>
  );
}

export default App;
