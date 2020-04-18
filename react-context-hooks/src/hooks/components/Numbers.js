import React, { useState, useEffect } from "react";

const Numbers = () => {
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null,
  });
  const [count, setCount] = useState(0);

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
      <div>
        {state.loading ? "loading..." : state.error ? state.error : state.data}
      </div>
      <div>count: {count}</div>
      <button onClick={() => setCount((count) => count + 1)}>increment</button>
    </div>
  );
};

export default Numbers;
