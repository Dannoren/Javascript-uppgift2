import React, { useState } from "react";
import './Kontakt.css'; // Se till att importera CSS-filen

const Kontakt = () => {
  const [namn, setNamn] = useState("");
  const [email, setEmail] = useState("");
  const [meddelande, setMeddelande] = useState("");

  const hanteraSkicka = (e) => {
    e.preventDefault();
    if (namn && email && meddelande) {
      alert("Tack för ditt meddelande! Jag återkommer så snart som möjligt.");
      setNamn(""); // Rensa fälten efter skickat meddelande
      setEmail("");
      setMeddelande("");
    } else {
      alert("Vänligen fyll i alla fält.");
    }
  };

  return (
    <div className="kontakt">
      <h1>Kontakt</h1>
      
      {/* Kontaktformulär */}
      <form onSubmit={hanteraSkicka}>
        <input
          type="text"
          placeholder="Ditt namn"
          value={namn}
          onChange={(e) => setNamn(e.target.value)}
        />
        <input
          type="email"
          placeholder="Din e-postadress"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Ditt meddelande"
          value={meddelande}
          onChange={(e) => setMeddelande(e.target.value)}
        />
        <button type="submit">Skicka Meddelande</button>
      </form>

      {/* Kontaktinformation */}
      <div className="info">
        <p><strong>Email:</strong> exempel@exempel.com</p>
        <p><strong>Telefon:</strong> +46 123 456 789</p>
      </div>
    </div>
  );
};

export default Kontakt;
