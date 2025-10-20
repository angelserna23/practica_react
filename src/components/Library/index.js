import React from 'react';

import Song from "../Song";

const Library = ( {songs} ) => {
    return(
        <div className='library'>
            {songs.map((song) => (
                <Song
                    key={song.id} 
                    title={song.title}
                    artist={song.artist}
                    duration={song.duration}
                />
            ))}
        </div>
    )
};

export default Library;