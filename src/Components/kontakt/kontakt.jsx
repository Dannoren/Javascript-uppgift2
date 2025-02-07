// src/Components/kontakt/kontakt.jsx
import React, { useState } from 'react';
import './kontakt.css'; // Lägg till stilen här

const Kontakt = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Skicka formuläret här (t.ex. via en API eller skicka ett e-post)
    alert('Tack för ditt meddelande!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="kontakt">
      <h1>Kontakta mig</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Ditt namn"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Din e-post"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Ditt meddelande"
        />
        <button type="submit">Skicka</button>
      </form>
    </div>
  );
};

export default Kontakt;
