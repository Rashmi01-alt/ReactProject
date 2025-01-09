// src/components/Dashboard.jsx
import React, { useContext } from "react";
import { PreferencesContext } from "../contexts/PreferencesContext";
import useFetchData from "../hooks/useFetchData";
import DataCard from "./DataCard";

// Keep the existing API keys and endpoints unchanged
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
const ApIKEY = "ctvon9pr01qh15ovui4gctvon9pr01qh15ovui50";

const apiEndpoints = {
  weather: `https:api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${API_KEY}&units=metric`,
  stocks: `https:finnhub.io/api/v1/quote?symbol=AAPL&token=${ApIKEY}`,
  crypto: "https://api.coingecko.com/api/v3/simple/price?ids=${searchTerm.toLowerCase()}&vs_currencies=usd,eur&include_24hr_change=true&include_24hr_vol=true",
};

const Dashboard = () => {
  const { categories, refreshRate } = useContext(PreferencesContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {categories.map((category) => (
          <DataFetcher
            key={category}
            category={category}
            endpoint={apiEndpoints[category]}
            refreshRate={refreshRate}
          />
        ))}
      </div>
    </div>
  );
};

const DataFetcher = ({ category, endpoint, refreshRate }) => {
  const { data, loading, error } = useFetchData(endpoint, refreshRate);

  return (
    <DataCard
      title={category}
      value={loading ? "Loading..." : error ? `Error: ${error}` : JSON.stringify(data)}
    />
  );
};

export default Dashboard;