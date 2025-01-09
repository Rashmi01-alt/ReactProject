// 
import { useState, useEffect } from "react";

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
        const response = await axios.get(endpoint);
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
