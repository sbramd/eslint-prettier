import React, { useState, useRef } from "react";
import Hello from "./Hello";

const someExpensiveComputation = () => "";

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState(() => someExpensiveComputation());
  const [showHello, setShowHello] = useState(true);
  const inputRef = useRef();
  const hello = useRef(() => console.log("hello"));

  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title);
    setTitle("");
  };
  const handleChange = (e) => {
    e.persist();
    const newTitle = e.target.value;

    setTitle((currentTitle) => {
      console.log(currentTitle, e.target.value);
      return newTitle;
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Song name:</label>
      <input ref={inputRef} type="text" value={title} onChange={handleChange} />
      <input type="submit" value="add" />
      <button
        type="button"
        onClick={() => {
          console.log(inputRef.current);
          inputRef.current.focus();
          hello.current();
        }}
      >
        focus
      </button>
      <button type="button" onClick={() => setShowHello(!showHello)}>
        toggle
      </button>
      {showHello && <Hello />}
    </form>
  );
};

export default NewSongForm;
