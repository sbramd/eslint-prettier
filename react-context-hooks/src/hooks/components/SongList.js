import React, { useState, useEffect } from "react";
import { v1 as uuid } from "uuid";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "memory gospel", id: 2 },
    { title: "this wild darkness", id: 3 }
  ]);
  const [age, setAge] = useState(20);
  const addSong = title => {
    setSongs([...songs, { title, id: uuid() }]);
  };

  useEffect(() => {
    console.log(
      "componentDidMount",
      "no changes effect hook would be watching for subsequent render-cycles"
    );
    return () => {
      console.log("componentWillUnmount");
    };
  }, []);
  useEffect(() => {
    console.log("useEffect callback", songs);
    console.log("componentDidMount", "'songs' changed");
    console.log("componentDidUpdate", "'songs' changed");
    return () => {
      console.log(
        "cleanup before effect function runs again or component unmounts"
      );
    };
  }, [songs]);
  useEffect(() => {
    console.log("useEffect callback", age);
    console.log("componentDidMount", "'age' changed");
    console.log("componentDidUpdate", "'age' changed");
  }, [age]);
  useEffect(() => {
    console.log("componentDidMount", "'songs' or 'age' changed");
    console.log("componentDidUpdate", "'songs' or 'age' changed");
  }, [songs, age]);
  useEffect(() => {
    console.log("componentDidMount", "invoked after every render cycle");
    console.log("componentDidUpdate", "invoked after every render cycle");
  });

  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong} />
      <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
    </div>
  );
};

export default SongList;
