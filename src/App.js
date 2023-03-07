import React, { Component } from "react";
import { useState } from "react";
import Song from "./components/Song";
import Controler from "./components/Controler";
import { tracks } from "./util";
import "./style/style.scss";
import Library from "./components/Library";
import Navbar from "./components/Navbar";
function App() {
  const [songs, setSongs] = useState(tracks);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songDetails, setSongDetails] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [isLibraryActive, setIsLibraryActive] = useState(true);

  return (
    <>
      <Navbar
        isLibraryActive={isLibraryActive}
        setIsLibraryActive={setIsLibraryActive}
      />
      <Song currentSong={currentSong}></Song>
      <Controler
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songDetails={songDetails}
        setSongDetails={setSongDetails}
      />
      <Library
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isLibraryActive={isLibraryActive}
      />
    </>
  );
}

export default App;
