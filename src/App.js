// src/App.jsx
import React from "react";
import { PreferencesProvider } from "./contexts/PreferencesContext";
import Dashboard from "./components/Dashboard";
import Preferences from "./components/Preferences";

const App = () => {
  return (
    <PreferencesProvider>
      <div className="app">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Dashboard
        </h2>
        <Preferences />
        <Dashboard />
      </div>
    </PreferencesProvider>
  );
};

export default App;
