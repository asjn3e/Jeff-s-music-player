import React, { Component } from "react";

function Library({ songs, setSongs, currentSong, setCurrentSong }) {
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
  return (
    <div className="library">
      <h1>Library</h1>
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
