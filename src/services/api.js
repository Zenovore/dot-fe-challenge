import { useEffect, useState } from "react";
import axios from "axios";

// SET BASE URL
axios.defaults.baseURL = "https://opentdb.com/";

export const useAxios = ({ url }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchData();
  }, [url]);

  return { data, error, loading };
};
