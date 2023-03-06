import React, { Component } from "react";

function Song({ currentSong }) {
  return (
    <div className="song">
      <div className="song__cover">
        <img src={currentSong.cover} alt="" />
      </div>
      <div className="song__title">{currentSong.title}</div>
      <p className="song__artist">{currentSong.artist}</p>
    </div>
  );
}

export default Song;
