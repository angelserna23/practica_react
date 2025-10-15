import React from 'react';
import "./SearchResults.css";
import { Link } from "react-router-dom";

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
      <ul className='results__list'>
        {songs.map((song) => (
          <li key={song.trackId} className='results__item'>
            <div className='results__meta'>
              {song.trackId ? (
                <h4 className='results__title'>
                  <Link to={`/song/${song.trackId}`}>{song.trackTitle}</Link> 
                </h4>
              ) : (
                <h4 className='results__title'>{song.trackTitle}</h4>
              )}
              <p className='results__subtitle'>
                {song.artistName} — <span className='results__album'>{song.albumTitle}</span> {/*Mostramos la banda y album*/}
              </p>
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
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SearchResults;
