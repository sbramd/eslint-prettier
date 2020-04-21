import React, { useRef, useState, useEffect } from "react";

export default () => {
  const renders = useRef(0);
  const isCurrent = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const fetchData = (url) => {
    fetch(url)
      .then((res) => res.text())
      .then((data) => {
        setTimeout(() => {
          console.log("data fetched");
          if (isCurrent.current)
            setState({ data, loading: false, error: null });
        }, 2000);
      })
      .catch((error) => {
        console.log(error.toString());
        setState({ loading: false, error: error.toString(), data: null });
      });
  };

  useEffect(() => {
    fetchData("http://numbersapi.com/0/trivia");

    return () => {
      isCurrent.current = false;
    };
  }, []);

  console.log("Hello renders: ", renders.current++);

  return <div>Hello</div>;
};
