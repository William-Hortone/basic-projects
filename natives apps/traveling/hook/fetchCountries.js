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
