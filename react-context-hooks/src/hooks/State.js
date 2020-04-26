import React, { useState } from "react";

const expensiveInitialState = () => 10;

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  return [
    values,
    (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  ];
};

const State = () => {
  // const [count, setCount] = useState(10);
  const [count, setCount] = useState(() => expensiveInitialState());

  // const [{ email, password }, setState] = useState({ email: "", password: "" });
  const [values, handleChange] = useForm({ email: "", password: "" });

  return (
    <div>
      <button
        onClick={() => {
          // setCount(count + 1);
          setCount((currentCount) => currentCount + 1);
        }}
      >
        +
      </button>
      <div>{count}</div>
      {/* <input
        type="email"
        value={email}
        onChange={(e) => {
          e.persist();
          setState((currentState) => ({
            ...currentState,
            email: e.target.value,
          }));
        }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          e.persist();
          setState((currentState) => ({
            ...currentState,
            password: e.target.value,
          }));
        }}
      /> */}
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default State;
