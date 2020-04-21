import React, { useState, useEffect, useRef, useLayoutEffect } from "react";

const Numbers = () => {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null,
  });
  const [count, setCount] = useState(0);
  const [rect, setRect] = useState({});
  const divRef = useRef();

  const fetchData = (url) => {
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        console.log(data);
        setState({ data, loading: false, error: null });
      })
      .catch((error) => {
        console.log(error.toString());
        setState({ loading: false, error: error.toString(), data: null });
      });
  };

  useLayoutEffect(() => {
    setRect(divRef.current.getBoundingClientRect());
  }, [state.data]);

  useEffect(() => {
    const onResize = () => {
      console.log(window.innerWidth);
    };

    // setState((state) => ({ data: state.data, loading: true, error: null }));
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (state.loading) fetchData(`http://numbersapi.com/${count}/trivia`);
  }, [count, state.loading]);

  useEffect(() => {
    setState((state) => ({ loading: true, error: null, data: state.data }));
  }, [count]);

  return (
    <div>
      <div ref={divRef} style={{ display: "inline-block" }}>
        {state.loading ? "loading..." : state.error ? state.error : state.data}
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <div>count: {count}</div>
      <button onClick={() => setCount((count) => count + 1)}>increment</button>
    </div>
  );
};

export default Numbers;
