import axios from "axios";
import { useEffect, useState } from "react";

const fetchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get("http://10.0.2.2:5003/api/getCountries");

      console.log("Successfully fetched countries:", response);
      console.log("Successfully fetched data:", response.countries);
      console.log(
        "Successfully fetched data.countries:",
        response.data.countries
      );

      setCountries(response.data.countries);

      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error);
      setIsLoading(false);
      console.error("Error fetching countries:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetchData = async () => {
    setIsLoading(true);
    fetchData();
  };

  return { countries, isLoading, error, refetchData };
};

export default fetchCountries;

// import axios from "axios";

// const getPlaces = async () => {
//   try {
//     const response = await fetch("http://10.0.2.2:5003/api/getCountries");

//     if (!response.ok) {
//       throw new Error("Failed to fetch places");
//     }
//     const data = await response.json();
//     console.log("the daaataaa", data);
//     return data.countries; // Assuming your API returns places in the 'places' key
//   } catch (error) {
//     console.error("Error fetching places:", error);
//     throw error;
//   }
// };

// export default getPlaces;
