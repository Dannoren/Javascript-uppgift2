import React, { useState } from "react";
import './Projekt.css'; // Se till att importera CSS-filen

const Projekt = () => {
  const [projekten, setProjekten] = useState([]);
  const [nyttProjekt, setNyttProjekt] = useState("");

  const hanteraLaggTillProjekt = (e) => {
    e.preventDefault();
    if (nyttProjekt.trim() !== "") {
      setProjekten([...projekten, nyttProjekt]);
      setNyttProjekt(""); // Rensa inputfältet efter tillägg
    }
  };

  return (
    <div className="projekt">
      <h1>Mina Projekt</h1>
      
      {/* Lista med projekt */}
      <ul>
        {projekten.map((projekt, index) => (
          <li key={index}>
            <a href={projekt} target="_blank" rel="noopener noreferrer">
              {projekt}
            </a>
          </li>
        ))}
      </ul>

      {/* Formulär för att lägga till nytt projekt */}
      <form onSubmit={hanteraLaggTillProjekt}>
        <input
          type="url"
          placeholder="Lägg till GitHub-länk eller annan projektlänk"
          value={nyttProjekt}
          onChange={(e) => setNyttProjekt(e.target.value)}
        />
        <button type="submit">Lägg till Projekt</button>
      </form>
    </div>
  );
};

export default Projekt;
