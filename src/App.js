import React, { useState, useEffect } from "react";
import Header from "./components/Header/index";
//import Song from "./components/Song/index";
import SearchResults from "./components/SearchResults/index";
import Library from "./components/Library";
import "./index.css";


function App() {
    const fakeSongs = [
      {
        id: "1",
        title:"Rock You Like a Hurricane",
        artist:"Scorpions",
        duration:"4:12",
      },

      {
        id: "2",
        title:"Electric Feel",
        artist:"MGMT",
        duration:"3:50",
      },

      {
        id: "3",
        title:"Hells Bells",
        artist:"AC/DC",
        duration:"5:12",
      },

      {
        id: "4",
        title:"Paranoid",
        artist:"Black Sabbath",
        duration:"2:48",
      },

      {
        id: "5",
        title:"Barracuda",
        artist:"Heart",
        duration:"4:22",
      },
    ];

    const [results, setResults] = useState(fakeSongs); //Aqui cargamos la libreria que pusimos dentro del array de objetos de fakesongs

    const [library, setLibrary] = useState([]); //Empezamos con un array vacio que agregaremos canciones

    const handleAddToLibrary = (song) => {
      setLibrary((prevLibrary) => 
        prevLibrary.some((s) => s.id === song.id) ? prevLibrary : [...prevLibrary, song]
      );
    }

    useEffect(() => {
      console.log("Biblioteca actualizada", library);
    }, [library]);

    return(
      <div className="App">
        <header className="App-header">
          <Header appName="Music App" />
        </header>

        <main className="App-main">
          <h2>Songs</h2>
          {/*Cargar las canciones*/}
          <SearchResults songs={results} onAdd={handleAddToLibrary}/>
          {/*Biblioteca del usuario*/}
          <h2>My Library</h2>
          <Library songs={library}/>
        </main>
      </div>
    )
};

export default App;