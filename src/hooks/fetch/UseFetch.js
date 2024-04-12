import { useState, useEffect } from "react";

const UseFetch = (url) => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function discoverMovies() {
      try {
        // const API_KEY = "bd6028a3ff6785a5ad7350ab134f1ee7";
        // const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
        setLoading(true);
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error("Error getting Data");
        }
        const data = await response.json();
        setLoading(false);
        setMovies(data);
      } catch (err) {
        if (!signal.aborted) {
          setError(true);
          console.error("Error fetching movie data:", err);
        }
      }
       finally {
        // setError(true)
        // setLoading(true)
      }
    }
    discoverMovies();
    return () => controller.abort();
  }, []);
  return { movies, loading, error };
};

export default UseFetch;
