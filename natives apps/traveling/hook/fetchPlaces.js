import axios from "axios";
import { useEffect, useState } from "react";

const fetchPlaces = () => {
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDataPlaces = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get("http://10.0.2.2:5003/api/getPlaces");
      setRecommendations(response.data.places);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchDataPlaces();
  }, []);

  const refreshDataPlaces = () => {
    fetchDataPlaces();
  };
  return { refreshDataPlaces, recommendations, error, isLoading };
};
export default fetchPlaces;
