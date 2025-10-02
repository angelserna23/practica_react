import React from 'react';
import Song from "../Song";
import "./SearchResults.css";

const SearchResults = ( {songs, onAdd} ) => {
    return(
        <div className='search-results'>
            {songs.map((song) => (
                <Song
                    key={song.id}
                    title={song.title}
                    artist={song.artist}
                    duration={song.duration}
                    onAdd={() => onAdd(song)}
                />
            ))}
        </div>
    )
};

export default SearchResults;