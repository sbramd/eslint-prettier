import React, { useState, useRef } from "react";
import { useFetch } from "./effect/useFetch";

export const Hello = () => {
  const renders = useRef(0);
  const { data, loading, error } = useFetch("http://numbersapi.com/0/trivia");

  console.log("hello renders: ", renders.current++);

  return <div>{loading ? "loading..." : error ? error : data}</div>;
};

const Ref = () => {
  const [email, setEmail] = useState("");
  const [showHello, setShowHello] = useState(true);

  const inputRef = useRef();
  const hello = useRef(() => console.log("hello"));

  return (
    <div>
      <button type="button" onClick={() => setShowHello(!showHello)}>
        toggle
      </button>
      {showHello && <Hello />}
      <input
        ref={inputRef}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
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
    </div>
  );
};

export default Ref;
