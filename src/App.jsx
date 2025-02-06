import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from './store/store.js';
import Home from "./Components/home/home.jsx";
import Kontakt from "./Components/kontakt/kontakt.jsx";
import OmMig from "./Components/ommig/ommig.jsx";
import Projekt from "./Components/projekt/projekt.jsx";
import Navbar from "./Components/navbar/navbar.jsx";
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/ommig" element={<OmMig />} />
          <Route path="/projekt" element={<Projekt />} />
        </Routes>
      </Router>
    </Provider>
  );
};


export default App
