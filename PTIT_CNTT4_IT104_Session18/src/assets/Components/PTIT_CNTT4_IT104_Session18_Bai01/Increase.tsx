import React, { useReducer } from "react";

type State = {
  count: number;
};

type Action = { type: "INCREASE" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

export default function Increase() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const handleClick = () => {
    dispatch({ type: "INCREASE" });
  };

  return (
    <div className="css">
      <h2>Count: {state.count}</h2>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}


