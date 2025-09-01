import React, { useReducer } from "react";

let initial = {
  count: 0,
};

export default function Counter() {
  let countReducer = (state1: any, action: any) => {
    switch (action.type) {
      case "Cong":
        return { count: state1.count + action.payload };
      case "Tru":
        return { count: state1.count - action.payload };
      default:
        return state1;
    }
  };

  let [state, dispatch] = useReducer(countReducer, initial);

  let handleTang = () => {
    dispatch({ type: "Cong", payload: 1 });
  };

  let handleGiam = () => {
    dispatch({ type: "Tru", payload: 1 });
  };

  return (
    <div>
      <h2>Số đếm: {state.count}</h2>
      <button onClick={handleTang}>Tăng</button>
      <button onClick={handleGiam}>Giảm</button>
    </div>
  );
}
