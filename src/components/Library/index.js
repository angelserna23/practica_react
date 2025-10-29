import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeSong } from '../../redux/actions';
import Song from '../Song';
import { LibraryWrap, LibraryTitle, Empty, Row, RemoveButton } from './styles';

const Library = () => {
  const songs = useSelector((state) => state.library.songs);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeSong(id));
  };

  if (!songs || songs.length === 0) {
    return (
      <LibraryWrap>
        <LibraryTitle>🎧 Mi Biblioteca</LibraryTitle>
        <Empty>Tu biblioteca está vacía. Agrega canciones desde la búsqueda.</Empty>
      </LibraryWrap>
    );
  }

  return (
    <LibraryWrap>
      <LibraryTitle>🎧 Mi Biblioteca</LibraryTitle>

      {songs.map((song) => (
        <Row key={song.id} className="library__item">
          <Song
            title={song.title}
            artist={song.artist}
            album={song.album}
            duration={song.duration}
          />
          <RemoveButton
            className="library__remove"
            onClick={() => handleRemove(song.id)}
            aria-label={`Eliminar ${song.title} de mi biblioteca`}
          >
            Eliminar
          </RemoveButton>
        </Row>
      ))}
    </LibraryWrap>
  );
};

export default Library;
