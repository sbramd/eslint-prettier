import React, { useState, useMemo, useRef, useCallback } from "react";

// const computeLongestWord = (arr) => {
//   if (!arr) return [];

//   console.log("computing longest word");

//   return arr.reduce((accumulator, currentValue) => {
//     if (currentValue.length > accumulator.length) return currentValue;
//     return accumulator;
//   }, "");
// };

const Memo = () => {
  const [count, setCount] = useState(0);
  const renders = useRef(0);

  const data = useMemo(
    () => ["spray", "limit", "elite", "exuberant", "destruction", "present"],
    []
  );
  const computeLongestWord = useCallback((arr) => {
    if (!arr) return [];

    console.log("computing longest word");

    return arr.reduce((accumulator, currentValue) => {
      if (currentValue.length > accumulator.length) return currentValue;
      return accumulator;
    }, "");
  }, []);

  const longestWord = useMemo(() => computeLongestWord(data), [
    data,
    computeLongestWord,
  ]); // `useMemo` allows you to apply memoization to any value type (not just functions). It does this by accepting a function which returns the value and then that function is only called when the value needs to be retrieved (which typically will only happen once each time an element in the dependencies array changes between renders).

  console.log("renders: ", renders.current++);

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <div>{longestWord}</div>
    </div>
  );
};

export default Memo;
