import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function Library({
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  isLibraryActive,
  setIsLibraryActive,
}) {
 
  const changeSong = (newSong) => {
    console.log("hello");
    const newSongs = [...songs];
    const currentIndex = newSongs.indexOf(currentSong);
    const nextindex = newSongs.indexOf(newSong);
    newSongs[currentIndex].active = false;
    newSongs[nextindex].active = true;
    setSongs(newSongs);
    setCurrentSong(newSong);
  };
  const closeLibrary = () => {
    setIsLibraryActive(false);
  };
  const handleDragStart = (e) => {
    setIsLibraryActive(false);
  };

  return (
    <div
      onDragStart={handleDragStart}
      draggable={true}
      className={`library ${isLibraryActive ? "active" : ""}`}
    >
      <div className="library__heading">
        <h1>Library</h1>
        <button onClick={closeLibrary} className="library__btn">
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>

      <ul className="library__list">
        {songs.map((song) => {
          return (
            <li
              key={song.uuid}
              onClick={() => changeSong(song)}
              className={
                song.active
                  ? "library__property  library__property--active"
                  : "library__property"
              }
            >
              <img src={song.cover} alt="" />
              <h2>{song.title}</h2>
              <button>play</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Library;
