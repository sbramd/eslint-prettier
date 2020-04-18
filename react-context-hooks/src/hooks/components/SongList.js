import React, { useState, useEffect } from "react";
import { v1 as uuid } from "uuid";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "memory gospel", id: 2 },
    { title: "this wild darkness", id: 3 },
  ]);
  const [age, setAge] = useState(20);
  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid() }]);
  };

  useEffect(() => {
    // This will be invoked when the component mounts. Notice the empty array [] as the second argument - that informs the `useEffect` Hook that it only needs to execute once, when the component mounts.
    console.log("Behavior before the component is added to the DOM.");
    return () => {
      // If a function is returned from `useEffect`, that function is invoked only when the component is removed from the DOM.
      console.log(
        "Behavior right before the component is removed from the DOM."
      );
    };
  }, []);
  useEffect(() => {
    // This will be invoked when the component mounts and re-evaluated on every re-render of the component. The optional second argument represents an array of dependency values that will trigger the re-evaluation of the `useEffect` Hook. If the array itself is not provided, it will be evaluated every re-render.
    console.log("Behavior when the component receives new state or props.");
  });
  useEffect(() => {
    // This will be invoked when the component mounts and re-evaluated if the value of `songs` changes since it is included in the option dependency array.
    console.log("Behavior when the value of `songs` changes.");
    // console.log("useEffect callback", songs);
    return () => {
      console.log(
        "Behavior right before this `useEffect` Hook runs again or the component is removed from the DOM."
      );
    };
  }, [songs]);
  useEffect(() => {
    console.log("Behavior when the value of `age` changes.");
    // console.log("useEffect callback", age);
  }, [age]);
  useEffect(() => {
    // This will be invoked when the component mounts and re-evaluated if the value of `songs` or `age` changes since it is included in the option dependency array.
    console.log("Behavior when the value of `songs` or `age` changes.");
  }, [songs, age]);

  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
};

export default SongList;
