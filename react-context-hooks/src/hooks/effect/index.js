import React, { useEffect, useState } from "react";
import { Hello } from "./Hello";
import { useFetch } from "./useFetch";

const Effect = () => {
  const [showHello, setShowHello] = useState(true);
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data, loading, error } = useFetch(
    `http://numbersapi.com/${count}/trivia`
  );

  useEffect(() => {
    const onResize = () => {
      console.log(window.innerWidth);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    console.log("Behavior when the component receives new state or props.");
  });

  useEffect(() => {
    console.log("Behavior when the value of `count` changes.");
    localStorage.setItem("count", JSON.stringify(count));

    return () => {
      console.log(
        "Behavior right before this `useEffect[count]` Hook runs again or the component is removed from the DOM."
      );
    };
  }, [count]);

  return (
    <div>
      <div>{loading ? "loading..." : error ? error : data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>

      <button onClick={() => setShowHello(!showHello)}>toggle</button>
      {showHello && <Hello />}
    </div>
  );
};

export default Effect;
