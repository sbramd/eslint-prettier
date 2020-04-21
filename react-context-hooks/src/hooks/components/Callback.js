import React, { useState, useCallback, useRef, useEffect } from "react";

const Hello = React.memo(({ increment }) => {
  const renders = useRef(0);
  console.log("renders: ", renders.current++);

  return <button onClick={() => increment(5)}>hello</button>;
});

const Callback = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(
    (n) => {
      setCount((c) => c + n);
    },
    [setCount]
  ); // `useCallback` will return a memoized version of the callback that only changes if one of the dependencies has changed. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

  useEffect(() => {
    console.log("Behavior when the value of `increment` changes.");
  }, [increment]);

  return (
    <div>
      <Hello increment={increment} />
      <div>count: {count}</div>
    </div>
  );
};

export default Callback;
