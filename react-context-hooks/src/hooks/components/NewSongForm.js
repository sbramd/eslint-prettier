import React, { useState } from "react";

const someExpensiveComputation = () => "";

const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState(() => someExpensiveComputation());
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
      <input type="text" value={title} onChange={handleChange} />
      <input type="submit" value="add" />
    </form>
  );
};

export default NewSongForm;
