import React, { useReducer } from "react";

type Jobs = {
  id: number;
  title: string;
  complete: boolean;
};

type State = {
  jobs: Jobs[];
  newTitle: string;
};

type Action =
  | { type: "ADD"; payload: Jobs }
  | { type: "EDIT"; payload: Jobs }
  | { type: "DELETE"; payload: number }
  | { type: "SET_TITLE"; payload: string };

export default function Todoo() {
  const initial: State = {
    jobs: [
      { id: 1, title: "hoc tieng nhat", complete: true },
      { id: 2, title: "hoc tieng anh", complete: false },
      { id: 3, title: "hoc tieng duc", complete: false },
    ],
    newTitle: "",
  };

  const todoReducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "SET_TITLE":
        return { ...state, newTitle: action.payload };
      case "ADD":
        return {
          ...state,
          jobs: [...state.jobs, action.payload],
          newTitle: "",
        };
      case "EDIT":
        return {
          ...state,
          jobs: state.jobs.map((job) =>
            job.id === action.payload.id ? action.payload : job
          ),
        };
      case "DELETE":
        return {
          ...state,
          jobs: state.jobs.filter((job) => job.id !== action.payload),
        };
      default:
        return state;
    }
  };

  const [todos, dispatch] = useReducer(todoReducer, initial);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "SET_TITLE", payload: e.target.value });
  };

  const handleAddTodo = () => {
    if (!todos.newTitle.trim()) return;
    const newTodo: Jobs = {
      id: Math.floor(Math.random() * 999),
      title: todos.newTitle,
      complete: false,
    };
    dispatch({ type: "ADD", payload: newTodo });
  };

  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const handleUpdate = (item: Jobs) => {
    const newTitle = prompt("Mời nhập tên công việc mới", item.title);
    if (newTitle && newTitle.trim()) {
      const newJob = { ...item, title: newTitle };
      dispatch({ type: "EDIT", payload: newJob });
    }
  };

  return (
    <div>
      <input
        type="text"
        value={todos.newTitle}
        onChange={handleChange}
        placeholder="Nhập công việc..."
      />
      <button onClick={handleAddTodo}>Thêm công việc</button>

      <h1>Danh sách công việc</h1>
      <ul>
        {todos.jobs.map((item) => (
          <li key={item.id}>
            {item.title}{" "}
            <button onClick={() => handleDelete(item.id)}>Xóa</button>
            <button onClick={() => handleUpdate(item)}>Sửa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
