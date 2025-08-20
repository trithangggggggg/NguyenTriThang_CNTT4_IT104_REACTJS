// import React, { Component } from "react";

// type Task = {
//   id: number;
//   task: string;
//   completed: boolean;
// };

// type InitialState = {
//   todos: Task[];
//   newTask: string;
// };

// export default class Event extends Component<{}, InitialState> {
//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       todos: [
//         { id: 1, task: "Học React", completed: false },
//         { id: 2, task: "Ôn TypeScript", completed: false },
//         { id: 3, task: "Làm bài tập", completed: false },
//       ],
//       newTask: "",
//     };
//   }

//   // Xóa công việc
//   deleteTask = (id: number) => {
//     const newTodos = this.state.todos.filter((item) => item.id !== id);
//     this.setState({ todos: newTodos });
//   };

//   // Bắt sự kiện thay đổi trong input
//   handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     this.setState({ newTask: e.target.value });
//   };

//   // Thêm công việc mới
//   addTask = () => {
//     if (this.state.newTask.trim() === "") return;
//     const newTask: Task = {
//       id: Date.now(), // tạo id tạm bằng timestamp
//       task: this.state.newTask,
//       completed: false,
//     };
//     this.setState({
//       todos: [...this.state.todos, newTask],
//       newTask: "", // reset input
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h2>Học về Event</h2>
//         <h3>Danh sách công việc</h3>

//         {/* Input + Button thêm việc mới */}
//         <input
//           type="text"
//           value={this.state.newTask}
//           onChange={this.handleChange}
//           placeholder="Nhập công việc..."
//         />
//         <button onClick={this.addTask}>Thêm công việc</button>

//         <ul>
//           {this.state.todos.map((item) => (
//             <li key={item.id}>
//               {item.task}{" "}
//               <button onClick={() => this.deleteTask(item.id)}>
//                 Xóa
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
