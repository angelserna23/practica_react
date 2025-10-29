import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/index";
import SearchResults from "../SearchResults/index";
import Library from "../Library";
import Home from "../../Pages/Home";
import SongDetail from "../../Pages/SongDetail";
import { ThemeProvider } from "styled-components";
import Theme from "../../theme/index";
import GlobalStyles from "../../theme/GlobalStyles";

function App() {
  return (
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
            {/* Nueva ruta para la biblioteca */}
            <Route path="/library" element={<Library />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
