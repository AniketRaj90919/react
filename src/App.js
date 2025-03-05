
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";  // Import the Index component from MyProfile file
import './App.css';

import { Login } from "./components/Login";
import { Sign } from "./components/Sign";
function App() {
  return (
    <div>
      <Login />
      
    </div>
    

  );
}

export default App;
