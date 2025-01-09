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


import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url, refreshRate) => {
  console.log(url);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let interval;

    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Using axios.request instead of axios.get
        const response = await axios.request({
          method: 'GET', // You can change this to other HTTP methods (POST, PUT, DELETE, etc.)
          url: url,      // The dynamic URL passed to the hook
        });

        console.log(response);
        setData(response.data); // Access response data from axios
        setError(null);          // Reset any previous errors
      } catch (err) {
        setError(err.message);   // Capture and set the error
      } finally {
        setLoading(false);       // Ensure loading is set to false once the request is complete
      }
    };

    fetchData();

    if (refreshRate > 0) {
      interval = setInterval(fetchData, refreshRate); // Set interval for periodic fetching
    }

    return () => clearInterval(interval); // Clear interval when component unmounts
  }, [url, refreshRate]);

  return { data, loading, error }; // Return the data, loading state, and error
};

export default useFetchData;

