import { Component } from "react";

type Task = {
  id: number;
  taskName: string;
  completed: boolean;
};
type InitialState = {
  taskName: string;
  tasks: Task[];
  isEdit: boolean;
  editId: number | null;
};

export default class Baitap9 extends Component<object, InitialState> {
  constructor(props: object) {
    super(props);
    this.state = {
      taskName: "",
      isEdit: false,
      editId: null,
      tasks: [
        { id: 1, taskName: "Hoc React", completed: false },
        { id: 2, taskName: "Lam bai React", completed: false },
        { id: 3, taskName: "Làm tiếng Nhật", completed: true },
      ],
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ taskName: e.target.value });
  };

  handleSubmit = () => {
    const { taskName, isEdit, editId, tasks } = this.state;
    if (taskName.trim() === "") return alert("Dữ liệu trống!");
    if (isEdit) {
      this.setState({
        taskName: "",
        editId: null,
        isEdit: false,
        tasks: tasks.map((t) => (t.id === editId ? { ...t, taskName } : t)),
      });
    } else {
      const newTask = { id: Date.now(), taskName, completed: false };
      this.setState({ tasks: [...tasks, newTask], taskName: "" });
    }
  };

  handleEdit = (id: number) => {
    const edit = this.state.tasks.find((t) => t.id === id);
    if (edit)
      this.setState({ taskName: edit.taskName, isEdit: true, editId: id });
  };

  handleDelete = (id: number) => {
    this.setState({ tasks: this.state.tasks.filter((t) => t.id !== id) });
  };

  toggleComplete = (id: number) => {
    this.setState({
      tasks: this.state.tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      ),
    });
  };

  render() {
    const { taskName, tasks, isEdit } = this.state;
    const completedCount = tasks.filter((t) => t.completed).length;

    return (
      <div>
        <h1>DANH SÁCH CÔNG VIỆC</h1>

        <input
          type="text"
          placeholder="Thêm công việc"
          value={taskName}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>
          {isEdit ? "Cập nhật" : "Thêm"}
        </button>
        <ul>
          {tasks.map((item) => (
            <ol key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => this.toggleComplete(item.id)}
              />
              {item.completed ? (
                <span style={{ textDecoration: "line-through" }}>
                  {item.taskName}
                </span>
              ) : (
                <span>{item.taskName}</span>
              )}
              <button onClick={() => this.handleEdit(item.id)}>Sửa</button>
              <button onClick={() => this.handleDelete(item.id)}>Xóa</button>
            </ol>
          ))}
        </ul>

        <p>
          Số lượng công việc hoàn thành {completedCount}/{tasks.length} tổng số
          công việc
        </p>
      </div>
    );
  }
}
