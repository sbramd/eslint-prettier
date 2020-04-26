import React, { useState, useRef, useLayoutEffect } from "react";
import { useFetch } from "./effect/useFetch";

const useMeasure = (deps) => {
  const [rect, setRect] = useState({});
  const myRef = useRef();

  useLayoutEffect(() => {
    setRect(myRef.current.getBoundingClientRect());
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps

  return [rect, myRef];
};

const LayoutEffect = () => {
  const [count, setCount] = useState(0);
  const { data, loading, error } = useFetch(
    `http://numbersapi.com/${count}/trivia`
  );
  const [rect, divRef] = useMeasure([loading]);

  return (
    <div>
      <div ref={divRef} style={{ display: "inline-block" }}>
        {loading ? "loading..." : error ? error : data}
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <div>count: {count}</div>
      <button onClick={() => setCount((count) => count + 1)}>increment</button>
    </div>
  );
};

export default LayoutEffect;
