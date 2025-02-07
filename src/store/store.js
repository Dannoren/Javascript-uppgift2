// src/store/store.js
import { createStore } from "redux";

// Initialt tillstånd
const initialState = {
  theme: 'light' // Standardtema
};

// Reducer för att hantera temaväxling
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      };
    default:
      return state;
  }
};

// Skapa Redux store
export const store = createStore(themeReducer);

// Action creator för temaväxling
export const toggleTheme = () => ({
  type: 'TOGGLE_THEME'
});
