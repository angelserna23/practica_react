import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const API_BASE = "https://www.theaudiodb.com/api/v1/json";
const API_KEY = "123";

export default function SongDetail() {
  const { id } = useParams();
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchTrack = async () => {
      try {
        setLoading(true);
        setError(null);

        const url = `${API_BASE}/${API_KEY}/track.php?h=${encodeURIComponent(id)}`;
        const { data } = await axios.get(url);
        const t = data?.track?.[0] || null;

        setTrack(t);
      } catch (e) {
        setError("No se pudo cargar la información de la canción.");
      } finally {
        setLoading(false);
      }
    };

    fetchTrack();
  }, [id]);

  const formatMs = (ms) => {
    if (!ms) return "-";
    const total = Math.floor(Number(ms) / 1000);
    const m = Math.floor(total / 60);
    const s = String(total % 60).padStart(2, "0");
    return `${m}:${s}`;
    };

  if (loading) return <main className="App-main"><p>Cargando canción…</p></main>;
  if (error)   return <main className="App-main"><p>{error}</p></main>;
  if (!track)  return <main className="App-main"><p>No se encontró la canción.</p></main>;

  return (
    <main className="App-main">
      <Link to="/" style={{ display: "inline-block", marginBottom: "1rem" }}>← Volver</Link>

      <h2>{track.strTrack}</h2>
      <p><strong>Artista:</strong> {track.strArtist || "-"}</p>
      <p><strong>Álbum:</strong> {track.strAlbum || "-"}</p>
    </main>
  );
}
