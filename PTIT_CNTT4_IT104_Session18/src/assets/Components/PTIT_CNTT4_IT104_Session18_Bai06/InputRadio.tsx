import React, { useReducer } from "react";

type State = {
  gender: string;
};

type Action = {
  type: "SET_GENDER";
  payload: string;
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_GENDER":
      return { gender: action.payload };
    default:
      return state;
  }
}

export default function InputRadio() {
  const [state, dispatch] = useReducer(reducer, { gender: "Nam" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_GENDER", payload: e.target.value });
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          name="gender"
          value="Nam"
          checked={state.gender === "Nam"}
          onChange={handleChange}
        />
        Nam
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="Nữ"
          checked={state.gender === "Nữ"}
          onChange={handleChange}
        />
        Nữ
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="Khác"
          checked={state.gender === "Khác"}
          onChange={handleChange}
        />
        Khác
      </label>
      <h3>Selected Gender: {state.gender}</h3>
    </div>
  );
}
