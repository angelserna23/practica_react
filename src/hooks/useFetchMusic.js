import { useEffect, useState, useCallback } from "react";
import axios from "axios";

const useFetchMusic = (url) => {
  const [albumsState, setAlbumsState] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMusic = useCallback(async () => {
    if (!url) return;

    try {
      const { data } = await axios.get(url);
      setAlbumsState(data?.album ?? []);
    } catch (e) {
      setAlbumsState([]);
      setError("Failed to fetch music library");
    }
  }, [url]);

  useEffect(() => {
    fetchMusic();
  }, [fetchMusic]);

  return { albumsState, isLoading, error, refetch: fetchMusic };
};

export default useFetchMusic;

