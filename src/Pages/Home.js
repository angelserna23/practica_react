import React, { useState, useEffect} from "react";
import useFetchMusic from "../hooks/useFetchMusic";
import SearchBar from "../components/SearchBar/index";
import SearchResults from "../components/SearchResults";
import axios from "axios";
import { SearchBarDiv, WelcomeMessage, AppMain, ListAlbum, ListContent, SongsTitle } from "./stylesHome";

const API_BASE = "https://www.theaudiodb.com/api/v1/json";
const API_KEY = "123"; //Esta key es la gratuita

export default  function Home() {
    //Buscamos el artista de acuerdo al input que coloque
    const [inputValue, setInputValue] = useState("");
    const [artist, setArtist] = useState("")

    //Aqui traemos los albumes del artista
    const albumsURL = artist ? `${API_BASE}/${API_KEY}/searchalbum.php?s=${encodeURIComponent(artist)}` : null;
    const { albumsState, isLoading, error, refetch } = useFetchMusic(albumsURL); //Aqui cuando escribamos el artista manda a fetchMusic a buscar
    
    //Aqui traemos las canciones del album del artista
    const [songs, setSongs] = useState([]);
    
    //Este es el evento de buscar el artista solo cuando se haga click en la lupita
    const handleSearch = () => {
        console.log("Buscando artista:", inputValue);
        if(inputValue.trim() != "") {
            setArtist(inputValue);
        }
    }
    useEffect(() => {
        const fetchTracks = async () => {
            if (!artist || !albumsState || albumsState.length === 0) {
                setSongs([]);
                return
            }

            try {
                const urls = albumsState.map(
                    (a) => `${API_BASE}/${API_KEY}/track.php?m=${a.idAlbum}`
                );

                const responses = await Promise.all(urls.map((u) => axios.get(u)));

                const allTracks = responses.flatMap(({ data }) =>  data?.track ?? []);

                const normalized = allTracks.map((t) => ({
                    trackId: t.idTrack,
                    trackTitle: t.strTrack,
                    artistName: t.strArtist,
                    albumId: t.idAlbum,
                    albumTitle: t.strAlbum,
                    trackNumber: t.intTrackNumber ? Number(t.intTrackNumber) : null,
                    durationMs: t.intDuration ? Number(t.intDuration) : null,
                }));

                setSongs(normalized);
            } catch (e) {
                setSongs([]);
            }
        };

        fetchTracks();
    }, [artist, albumsState])

    return (
        <AppMain>
            <SearchBarDiv>
                <SearchBar 
                    value={inputValue} 
                    onChange={setInputValue} 
                    onSubmit={handleSearch}
                />
            </SearchBarDiv>

            {!artist && (
                <WelcomeMessage>Escribe un artista para comenzar tu búsqueda 🎵</WelcomeMessage>
            )}

            {isLoading && <p>Cargando albumes...</p>}
            
            {error && (
            <div className="error-retry">
                <p>Hubo un problema al cargar los datos. Intenta nuevamente 🔁</p>
                <button onClick={refetch}>Reintentar</button>
            </div>
            )}
            
            {artist && !isLoading && !error && (albumsState?.length ? (
                <section>
                    <h3>Albumes encontrados (preview temporal)</h3>
                    <ListContent>
                        {albumsState.map((a) => (
                            <ListAlbum key={a.idAlbum}>
                                {a.strAlbum} — {a.strArtist} {a.intYearReleased ? `(${a.intYearReleased})` : ""}
                            </ListAlbum>
                        ))}
                    </ListContent>
                </section>
            ) : (
                <p>No se encontraron albumes para "{artist}".</p>
            ))}

            <SongsTitle>Songs</SongsTitle>
            <SearchResults 
                songs={songs}
            />
        </AppMain>
    )
};