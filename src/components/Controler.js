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
  currentSong,
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
        <FontAwesomeIcon icon={faAngleLeft} />
        <FontAwesomeIcon onClick={playSongHandler} icon={faPlay} />
        <FontAwesomeIcon icon={faShuffle} />
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
      <audio
        ref={audioRef}
        onTimeUpdate={timerHandler}
        onLoadedMetadata={timerHandler}
        src={currentSong.source}
      ></audio>
    </div>
  );
}

export default Controler;
