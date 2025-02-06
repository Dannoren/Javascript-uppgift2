import React from "react";
import './OmMig.css'; // Se till att importera CSS-filen

const OmMig = () => {
  return (
    <div className="ommig">
      <h1>Om Mig</h1>
      <img src="din-bild-url.jpg" alt="Din Bild" />
      <p>
        Hej! Jag är en passionerad utvecklare med erfarenhet av att bygga
        interaktiva och användarvänliga webbapplikationer. Jag älskar att lära mig
        nya teknologier och arbeta med kreativa projekt. Här är några saker som
        definierar mig:
      </p>
      <p>
        - Erfarenhet av React, JavaScript, CSS och HTML <br />
        - Passionerad om att skapa intuitiva användarupplevelser <br />
        - Ständig strävan efter att förbättra mina tekniska färdigheter
      </p>
      <button className="btn">Läs mer om mina projekt</button>

      {/* Instagram-ikon knapp */}
      <a 
        href="https://www.instagram.com/Dannoren" 
        target="_blank" 
        rel="noopener noreferrer"
        className="instagram-btn"
      >
      <i className="fa fa-instagram"></i>
        
      </a>
    </div>
  );
};

export default OmMig;
