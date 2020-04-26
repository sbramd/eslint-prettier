import { useEffect, useState, useRef } from "react";

export const useFetch = (url) => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    setState((state) => ({ loading: true, error: null, data: state.data }));
  }, [url, setState]);

  useEffect(() => {
    if (state.loading) {
      fetch(url)
        .then((x) => x.text())
        .then((y) => {
          setTimeout(() => {
            if (isCurrent.current)
              setState({ data: y, loading: false, error: null });
          }, 2000);
        })
        .catch((err) => {
          setTimeout(() => {
            if (isCurrent.current)
              setState({ loading: false, error: err.toString(), data: null });
          }, 2000);
        });
    }
  }, [state.loading, url]);

  return state;
};
