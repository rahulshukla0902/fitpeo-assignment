import "./App.css";
import { Navbar, Sidebar, Dashboard } from "./components";
import  Logo from "../src/assets/web.png"

function App() {
  return (
    <div className="app-container">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <Navbar className="navbar" />
      <div className="main-content">
        <Sidebar className="sidebar" />
        <Dashboard className="dashboard" />
      </div>
    </div>
  );
}

export default App;
