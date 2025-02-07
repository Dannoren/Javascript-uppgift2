import React from "react";
import ReactDOM from "react-dom/client";  // Uppdaterad import
import { Provider } from "react-redux";  // Importera Provider
import { store } from './store/store';   // Importera din Redux store
import App from './App';  // Importera din App-komponent

const root = ReactDOM.createRoot(document.getElementById('root'));  // Skapa root
root.render(
  <Provider store={store}>  {/* Omsluter App-komponenten med Provider */}
    <App />
  </Provider>
);
