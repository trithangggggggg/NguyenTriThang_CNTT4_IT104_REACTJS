import React, { useReducer, useEffect, useState } from "react";

type Task = {
  id: number;
  title: string;
};

type State = {
  tasks: Task[];
};

type Action =  | { type: "ADD_TASK"; payload: string }
  | { type: "DELETE_TASK"; payload: number }
  | { type: "SET_TASKS"; payload: Task[] };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_TASKS":
      return { tasks: action.payload };

    case "ADD_TASK":
      const newTask: Task = {
        id: Date.now(),
        title: action.payload,
      };
      return { tasks: [...state.tasks, newTask] };
    case "DELETE_TASK":
      return {
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
}

export default function TaskManager() {
  const [state, dispatch] = useReducer(reducer, { tasks: [] });
  const [input, setInput] = useState("");

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      dispatch({ type: "SET_TASKS", payload: JSON.parse(savedTasks) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state.tasks]);

  const handleAddTask = () => {
    if (input.trim() === "") return;
    dispatch({ type: "ADD_TASK", payload: input });
    setInput("");
  };

  const handleDeleteTask = (id: number) => {
    const confirm = window.confirm("Có chắc muốn xóa?");
    if(confirm){
        dispatch({ type: "DELETE_TASK", payload: id });
    }
  };

  return (
    <div className="bai7_8">
      <div className="task-container">
        <input
          type="text"
          placeholder="Nhập tên công việc"
          className="task-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="button" onClick={handleAddTask}>
          Thêm
        </button>
        <ul className="task-list">
          {state.tasks.map((task) => (
            <li key={task.id} className="task-item">
              <span>{task.title}</span>
              <button
                className="delete-btn"
                type="button"
                onClick={() => handleDeleteTask(task.id)}
              >
                Xóa
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
