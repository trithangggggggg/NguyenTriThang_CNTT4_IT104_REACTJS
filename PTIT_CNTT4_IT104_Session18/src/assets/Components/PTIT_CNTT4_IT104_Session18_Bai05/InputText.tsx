import React, { useReducer } from "react";

type State = {
  text: string;
};

type Action = {
  type: "SETTEXT";
  payload: string;
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SETTEXT":
      return { text: action.payload };
    default:
      return state;
  }
}

export default function InputText() {
  const [state, dispatch] = useReducer(reducer, { text: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SETTEXT", payload: e.target.value });
  };

  return (
    <div>
      <h1>{state.text}</h1>
      <input
        type="text"
        placeholder="inputchange"
        value={state.text}
        onChange={handleChange}
      />
    </div>
  );
}
