import { createSlice, configureStore } from '@reduxjs/toolkit';

// Skapa en slice för projekt
export const projectSlice = createSlice({
  name: 'projects',
  initialState: { projects: [] },  // Initialt tillstånd
  reducers: {
    // Reducer för att sätta nya projekt
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
  },
});

// Exportera actions som genereras av createSlice
export const { setProjects } = projectSlice.actions;

// Konfigurera Redux store
export const store = configureStore({
  reducer: {
    projects: projectSlice.reducer,  // Lägg till reducer för projekt
  },
});
