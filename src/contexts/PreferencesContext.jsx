// src/contexts/PreferencesContext.js
import React, { createContext, useState, useEffect } from "react";

export const PreferencesContext = createContext();

export const PreferencesProvider = ({ children }) => {
  const [categories, setCategories] = useState(
    JSON.parse(localStorage.getItem("categories")) || ["weather"]
  );
  const [refreshRate, setRefreshRate] = useState(
    JSON.parse(localStorage.getItem("refreshRate")) || 5000
  );

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
    localStorage.setItem("refreshRate", JSON.stringify(refreshRate));
  }, [categories, refreshRate]);

  return (
    <PreferencesContext.Provider
      value={{ categories, setCategories, refreshRate, setRefreshRate }}
    >
      {children}
    </PreferencesContext.Provider>
  );
};
