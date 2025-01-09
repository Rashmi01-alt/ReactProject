// 
import { useState, useEffect } from "react";
import axios from "axios"

const useFetchData = (url, refreshRate) => {
  console.log(url);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let interval;

    const fetchData = async () => {
      
      // try {
      //   setLoading(true);
      //   const response = await fetch(url);
      //   if (!response.ok) {
      //     throw new Error(`HTTP error! Status: ${response.status}`);
      //   }
      //   const responseData = await response.json();
      //   setData(responseData);
      //   setError(null);
      
      // } catch (err) {
      try {
        setLoading(true);
        const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=d1845658f92b31c64bd94f06f7188c9c&units=metric");
        console.log(response);
        setData(response.data);
        setError(null);
      }catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    if (refreshRate > 0) {
      interval = setInterval(fetchData, refreshRate);
    }

    return () => clearInterval(interval);
  }, [url, refreshRate]);

  return { data, loading, error };
};

export default useFetchData;
