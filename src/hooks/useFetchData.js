// // 
// import { useState, useEffect } from "react";
// import axios from "axios"

// const useFetchData = (url, refreshRate) => {
//   console.log(url);
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let interval;

//     const fetchData = async () => {
      
//       // try {
//       //   setLoading(true);
//       //   const response = await fetch(url);
//       //   if (!response.ok) {
//       //     throw new Error(`HTTP error! Status: ${response.status}`);
//       //   }
//       //   const responseData = await response.json();
//       //   setData(responseData);
//       //   setError(null);
      
//       // } catch (err) {
//       try {
//         setLoading(true);
//         const response = await axios.get(url);
//         console.log(response);
//         setData(response.data);
//         setError(null);
//       }catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();

//     if (refreshRate > 0) {
//       interval = setInterval(fetchData, refreshRate);
//     }

//     return () => clearInterval(interval);
//   }, [url, refreshRate]);

//   return { data, loading, error };
// };

// export default useFetchData;


// import { useState, useEffect } from "react";
// import axios from "axios";

// const useFetchData = (url, refreshRate) => {
//   console.log(url);
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     let interval;

//     const fetchData = async () => {
//       try {
//         setLoading(true);
        
//         // Using axios.request instead of axios.get
//         const response = await axios.request({
//           method: 'GET', // You can change this to other HTTP methods (POST, PUT, DELETE, etc.)
//           url: url,      // The dynamic URL passed to the hook
//         });

//         console.log(response);
//         setData(response.data); // Access response data from axios
//         setError(null);          // Reset any previous errors
//       } catch (err) {
//         setError(err.message);   // Capture and set the error
//       } finally {
//         setLoading(false);       // Ensure loading is set to false once the request is complete
//       }
//     };

//     fetchData();

//     if (refreshRate > 0) {
//       interval = setInterval(fetchData, refreshRate); // Set interval for periodic fetching
//     }

//     return () => clearInterval(interval); // Clear interval when component unmounts
//   }, [url, refreshRate]);

//   return { data, loading, error }; // Return the data, loading state, and error
// };

// export default useFetchData;

import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (category, refreshRate) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        let url = "";
        let params = {};

        // Directly use the API URL for weather
        if (category === "weather") {
          url = "https://api.openweathermap.org/data/2.5/weather";
          params = {
            lat: 35,
            lon: 139,
            appid: "d1845658f92b31c64bd94f06f7188c9c", // API Key for weather
            units: "metric",
          };
        } else if (category === "stocks") {
          url = "https://finnhub.io/api/v1/quote";
          params = {
            symbol: "AAPL", // Example stock symbol
            token: "ctvon9pr01qh15ovui4gctvon9pr01qh15ovui50", // API Key for stocks
          };
        } else {
          throw new Error(`Unsupported category: ${category}`);
        }

        // Make the API request using Axios
        const response = await axios.get(url, { params });
        setData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const intervalId = setInterval(fetchData, refreshRate);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [category, refreshRate]);

  return { data, loading, error };
};

export default useFetchData;


