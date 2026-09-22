import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(
    function () {
      let cancelled = false;

      async function load() {
        try {
          setIsLoading(true);
          setError(null);
          const response = await fetch(url);

          if (!response.ok) {
            throw new Error("Error while loading data. Please reload page!");
          }

          const result = await response.json();
          if (!cancelled) setData(result);
        } catch (error) {
          if (!cancelled) setError(error.message);
        } finally {
          if (!cancelled) setIsLoading(false);
        }
      }
      load();
      return function () {
        cancelled = true;
      };
    },
    [url]
  );
  return { data, isLoading, error };
}
