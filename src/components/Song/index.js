import React from "react";
import { Card, SongTitle, SongMeta, SongAlbum, Small } from "./styles";

const Song = ({ title, artist, album, duration }) => {
  return (
    <Card>
      <SongTitle>{title}</SongTitle>
      <SongMeta>
        {artist} — <SongAlbum>{album}</SongAlbum>
      </SongMeta>
      {duration ? <Small>Duración: {duration}</Small> : null}
    </Card>
  );
};

export default Song;
