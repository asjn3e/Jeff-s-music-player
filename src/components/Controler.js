import React, { Component, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faShuffle,
  faPlay,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

import { timeConverter } from "../util";
function Controler({
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  songDetails,
  setSongDetails,
}) {
  const audioRef = useRef(null);
  const playSongHandler = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    }
  };
  const timerHandler = (e) => {
    if (isPlaying) {
      audioRef.current.play();
    }
    setSongDetails({
      ...songDetails,
      duration: e.target.duration,
      currentTime: e.target.currentTime,
    });
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongDetails({ ...songDetails, currentTime: e.target.value });
  };

  const skipHandler = (direction) => {
    const newSongs = [...songs];
    let newSong = [];
    const index = newSongs.indexOf(currentSong);
    newSongs[index].active = false;
    //next track
    if (direction === "next-track") {
      newSong = newSongs[(index + 1) % newSongs.length];
      newSongs[(index + 1) % newSongs.length].active = true;
    }
    //previous track
    else {
      //checking to see if there is previous track or not
      if (index == 0) {
        newSong = newSongs[newSongs.length - 1];
        newSongs[newSongs.length - 1].active = true;
      } else {
        newSong = newSongs[index - 1];
        newSongs[index - 1].active = true;
      }
    }
    setSongs(newSongs);
    setCurrentSong(newSong);
  };
  return (
    <div className="controler">
      <div className="controler__time">
        <p className="">{timeConverter(songDetails.currentTime)}</p>
        <input
          type="range"
          onChange={dragHandler}
          value={songDetails.currentTime}
          min={0}
          max={songDetails.duration}
          name=""
          id=""
        />
        <p className="">{timeConverter(songDetails.duration)}</p>
      </div>
      <div className="controler__controls">
        <FontAwesomeIcon
          icon={faAngleLeft}
          onClick={() => skipHandler("previous-track")}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon icon={faShuffle} />
        <FontAwesomeIcon
          icon={faAngleRight}
          onClick={() => skipHandler("next-track")}
        />
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={timerHandler}
        onLoadedMetadata={timerHandler}
        onEnded={() => {
          skipHandler("next-track");
        }}
        src={currentSong.source}
      ></audio>
    </div>
  );
}

export default Controler;
