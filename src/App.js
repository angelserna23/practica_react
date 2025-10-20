import React, { useState, useEffect } from "react";
import  { Route, Routes} from "react-router-dom";
import Header from "./components/Header/index";
//import Song from "./components/Song/index";
import SearchResults from "./components/SearchResults/index";
import Library from "./components/Library";
import Home from "./Pages/Home";
import SongDetail from "./Pages/SongDetail";
//import "./index.css";

//Importacion para trabajar para styled-components
import { ThemeProvider } from "styled-components";
import Theme from "./theme/index";
import GlobalStyles from "./theme/GlobalStyles";

function App() {
    return(
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
          <div className="App">
            <header className="App-header">
              <Header appName="Music App" />
            </header>

            <main className="App-main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/song/:id" element={<SongDetail />} />
              </Routes>
            </main>
          </div>
      </ThemeProvider>
    )
};

export default App;