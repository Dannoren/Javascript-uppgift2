import React from "react";
import { useSelector } from "react-redux";
import './home.css';

const Home = () => {
  const theme = useSelector((state) => state.theme.theme); // Hämta tema från Redux

  return (
    <div className={`home ${theme}`}>
      <h1>Välkommen till min hemsida</h1>
      <p>Här kan du lära dig mer om mig, mina projekt och mycket mer!</p>
      <button className="btn">Läs mer</button>
    </div>
  );
};

export default Home;

