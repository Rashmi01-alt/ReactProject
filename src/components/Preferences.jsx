// src/components/Preferences.jsx
import React, { useContext, useState } from "react";
import { PreferencesContext } from "../contexts/PreferencesContext";

const Preferences = () => {
  const { categories, setCategories, refreshRate, setRefreshRate } =
    useContext(PreferencesContext);

  const [newCategories, setNewCategories] = useState(categories.join(","));
  const [newRefreshRate, setNewRefreshRate] = useState(refreshRate);

  const handleSave = () => {
    setCategories(newCategories.split(",").map((cat) => cat.trim()));
    setRefreshRate(parseInt(newRefreshRate, 10));
    alert("Preferences Saved!");
  };

  return (
    
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        User Preferences
      </h2>
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Categories (comma-separated):
          </label>
          <input
            type="text"
            value={newCategories}
            onChange={(e) => setNewCategories(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-green-500 outline-none transition-colors bg-gray-50"
            placeholder="e.g., weather,stocks,sports"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Refresh Rate (ms):
          </label>
          <input
            type="number"
            value={newRefreshRate}
            onChange={(e) => setNewRefreshRate(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-gray-50"
            placeholder="e.g., 5000"
          />
        </div>
        <button
          onClick={handleSave}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors font-medium"
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
};

export default Preferences;