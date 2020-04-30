import React from "react";
import { TextField } from "./TextField";
import { Counter } from "./Counter";
import { Reducer } from "./Reducer";
import "./Generics";

console.log(process.env.REACT_APP_AUTHOR);

const App: React.FC = () => {
  return (
    <div>
      <TextField
        text="hello"
        person={{ firstName: "", lastName: "" }}
        handleChange={(e) => {
          console.log(e.target.value);
        }}
      />
      <Reducer />
      <Counter>
        {({ count, setCount }) => (
          <>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </>
        )}
      </Counter>
    </div>
  );
};

export default App;
