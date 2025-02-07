
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from './store/store.js'; // Din Redux store
import Home from "./Components/home/home.jsx";
import Kontakt from "./Components/kontakt/kontakt.jsx";
import OmMig from "./Components/ommig/ommig.jsx";
import Projekt from "./Components/projekt/projekt.jsx";
import Navbar from "./Components/navbar/navbar.jsx";
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import { toggleTheme } from './store/store'; // Importera action för temaväxling

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme); // Hämtar tema från Redux store

  // Funktion för att växla mellan dark och light tema
  const handleThemeToggle = () => {
    dispatch(toggleTheme()); // Växla tema
  };

  return (
    <Provider store={store}>
      <Router>
        <div className={theme === 'dark' ? 'dark' : 'light'}> {/* Applicera aktuellt tema */}
          <Navbar />
          <button onClick={handleThemeToggle} className="theme-toggle-btn">
            Växla Tema
          </button> {/* Knapp för att växla tema */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route 
              path="/ommig" 
              element={
                <OmMig 
                  name="Daniel"
                  image="https://example.com/din-bild.jpg"
                  description="Hej! Jag är en passionerad utvecklare med erfarenhet av att bygga interaktiva och användarvänliga webbapplikationer."
                  instagramUrl="https://www.instagram.com/Dannoren"
                />
              } 
            />
            <Route path="/projekt" element={<Projekt />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
