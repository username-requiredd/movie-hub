import { useState, useEffect } from "react";

const FetchTrailer = (url) => {
  const [trailer, setTrailer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchData(url, { signal }) {
      const apiKey =
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjEzOGYwZTdlYzg3NTMwMzE3NTI5MDZkMTU0NmJmMiIsInN1YiI6IjY2MTg1YWVjMGYwZGE1MDE3Y2RlYTcyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WnRTvQbUgOWMCbSK0ckZnkptQt1ny51LaHvuVU5RPbA";

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setTrailer(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      }
    }

    fetchData(url, { signal });

    return () => controller.abort();
  }, [url]);

  return { trailer, error };
};

export default FetchTrailer;
