import React from 'react';
import { Link } from "react-router-dom";
import { ListContent, ListSong, SongTitle, SongText } from "./styles";


const SearchResults = ({ songs = [], onAdd }) => {
  if (!songs || songs.length === 0) {
    return (
      <section className='results'>
        <p className='results__error'>No hay canciones para mostrar</p>
      </section>
    );
  }

  return (
    <section className='results'>
      <ListContent className='results__list'>
        {songs.map((song) => (
          <ListSong key={song.trackId}>
            <div className='results__meta'>
              {song.trackId ? (
                <SongTitle className='results__title'>
                  <Link to={`/song/${song.trackId}`}>{song.trackTitle}</Link> 
                </SongTitle>
              ) : (
                <SongTitle className='results__title'>{song.trackTitle}</SongTitle>
              )}
              <SongText className='results__subtitle'>
                ✅ {song.artistName} — <span className='results__album'>{song.albumTitle}</span> {/*Mostramos la banda y album*/}
              </SongText>
            </div>

            {typeof onAdd === "function" && (
              <button
                className='results__add'
                onClick={() => onAdd(song)}
                aria-label={`Agregar ${song.trackTitle} a mi biblioteca`}
              >
                + Add
              </button>
            )}
          </ListSong>
        ))}
      </ListContent>
    </section>
  );
};

export default SearchResults;
