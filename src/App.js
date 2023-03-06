import React, { Component } from "react";
import { useState } from "react";
import Song from "./components/Song";
import Controler from "./components/Controler";
import { tracks } from "./util";
import "./style/style.scss";
function App() {
  const [songs, setSongs] = useState(tracks);
  const [currentSong, setCurrentSong] = useState(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songDetails, setSongDetails] = useState({
    currentTime: 0,
    duration: 0,
  });

  return (
    <>
      <Song currentSong={currentSong}></Song>
      <Controler
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songDetails={songDetails}
        setSongDetails={setSongDetails}
      ></Controler>
    </>
  );
}

export default App;
