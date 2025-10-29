import React from 'react';
import { ListContent, ListSong, SongTitle, SongText, SongLink, SongAddDiv, SongAddIcon, SongAddButton } from "./styles";
import { useDispatch } from 'react-redux';
import { addSong } from "../../redux/actions";

const SearchResults = ({ songs = [] }) => {
  const dispatch = useDispatch();

  if (!songs || songs.length === 0) {
    return (
      <section className='results'>
        <p className='results__error'>No hay canciones para mostrar</p>
      </section>
    );
  }

  const handleAdd = (song) => {
    // Mapea a la forma que pide el ejercicio
    const payload = {
      id: song.trackId,
      title: song.trackTitle,
      artist: song.artistName,
      album: song.albumTitle,
    };
    dispatch(addSong(payload));
  };

  return (
    <section className='results'>
      <ListContent className='results__list'>
        {songs.map((song) => (
          <ListSong key={song.trackId}>
            <div className='results__meta'>
                {song.trackId ? (
                  <SongTitle className='results__title'>
                    <SongLink to={`/song/${song.trackId}`}>
                      {song.trackTitle}
                    </SongLink>
                  </SongTitle>
                ) : (
                  <SongTitle className='results__title'>{song.trackTitle}</SongTitle>
                )}
              <SongText className='results__subtitle'>
                ✅ {song.artistName} — <span className='results__album'>{song.albumTitle}</span>
              </SongText>
            </div>

            {/* Si quieres mantener el botón textual además del ícono */}
            <SongAddDiv>
              <SongAddButton
                className='results__add'
                onClick={() => handleAdd(song)}
                aria-label={`Agregar ${song.trackTitle} a mi biblioteca`}
              >
                + Add Song
              </SongAddButton>
            </SongAddDiv>
          </ListSong>
        ))}
      </ListContent>
    </section>
  );
};

export default SearchResults;

