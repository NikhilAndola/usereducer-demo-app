import React, { useReducer } from "react";
import "./styles.css";

export default function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);

  // The initial state is the value the state is initialized with.
  // For example, initial state:

  // const initialState = {
  //   counter: 0
  // };

  // An action object is an object that describes how to update the state.
  // The dispatch is a special function that dispatches an action object.
  // The dispatch function is created for your by the useReducer() hook:

  // The reducer is a pure function that accepts 2 parameters:
  // the current state and an action object. Depending on the action
  // object, the reducer function must update the state in an immutable
  // manner, and return the new state.

  const initialState = 0;

  const reducer = (state, action) => {
    console.log(state);
    switch (action) {
      case "add":
        return state + 1;
      case "subtract":
        return state - 1;
      case "reset":
        return 0;
      default:
        throw new Error("Unexpected actions");
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);
  console.log(count);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch("add")}>add</button>
      <button onClick={() => dispatch("subtract")}>subtract</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
}
