export const addSong = (song) => {
    return {
        type: "ADD_SONG",
        payload: {
            id: song.id || Date.now(),
            title: song.title,
            artist: song.artist,
            album: song.album,
        },
    };
};

export const removeSong = (id) => {
    return {
        type: "REMOVE_SONG",
        payload: id,
    };
};
