import React, { Component } from "react";

type Task = {
  id: number;
  title: string;
  assignee: string;
  done: boolean;
  createdAt: Date;
};

type State = {
  list: Task[];
  currentEdit: number | null;
  formEdit: {
    title: string;
    assignee: string;
  };
};

export default class TodoList extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          title: "Làm bài tập React",
          assignee: "Nguyễn Trí Thắng",
          done: false,
          createdAt: new Date(),
        },
        {
          id: 2,
          title: "Ôn lại TypeScript",
          assignee: "Nguyễn Trí Thắng",
          done: true,
          createdAt: new Date(),
        },
      ],
      currentEdit: null,
      formEdit: {
        title: "",
        assignee: "",
      },
    };
  }

  // ===== Helper =====
  private renderDate(date: Date) {
    return new Date(date).toLocaleString("vi-VN");
  }

  private renderStatus(status: boolean) {
    return status ? "Đã hoàn thành" : "Chưa hoàn thành";
  }

  // ===== CRUD =====
  removeTask = (id: number) => {
    this.setState({
      list: this.state.list.filter((t) => t.id !== id),
    });
  };

  startEdit = (task: Task) => {
    this.setState({
      currentEdit: task.id,
      formEdit: { title: task.title, assignee: task.assignee },
    });
  };

  saveTask = (id: number) => {
    const { list, formEdit } = this.state;
    const updated = list.map((t) =>
      t.id === id ? { ...t, title: formEdit.title, assignee: formEdit.assignee } : t
    );
    this.setState({
      list: updated,
      currentEdit: null,
      formEdit: { title: "", assignee: "" },
    });
  };

  cancelEdit = () => {
    this.setState({
      currentEdit: null,
      formEdit: { title: "", assignee: "" },
    });
  };

  // ===== RENDER =====
  render() {
    const { list, currentEdit, formEdit } = this.state;
    return (
      <div style={{ padding: "30px" }}>
        <h2>Danh sách công việc</h2>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            backgroundColor: "#f9f9f9",
          }}
        >
          <thead>
            <tr>
              <th style={{ padding: 10, borderBottom: "1px solid #ccc" }}>ID</th>
              <th style={{ padding: 10, borderBottom: "1px solid #ccc" }}>
                Công việc
              </th>
              <th style={{ padding: 10, borderBottom: "1px solid #ccc" }}>
                Người nhận
              </th>
              <th style={{ padding: 10, borderBottom: "1px solid #ccc" }}>
                Trạng thái
              </th>
              <th style={{ padding: 10, borderBottom: "1px solid #ccc" }}>
                Ngày tạo
              </th>
              <th style={{ padding: 10, borderBottom: "1px solid #ccc" }}>
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map((task) => (
              <tr key={task.id}>
                <td style={{ padding: 10 }}>{task.id}</td>
                <td style={{ padding: 10 }}>
                  {currentEdit === task.id ? (
                    <input
                      value={formEdit.title}
                      onChange={(e) =>
                        this.setState({
                          formEdit: { ...formEdit, title: e.target.value },
                        })
                      }
                    />
                  ) : (
                    task.title
                  )}
                </td>
                <td style={{ padding: 10 }}>
                  {currentEdit === task.id ? (
                    <input
                      value={formEdit.assignee}
                      onChange={(e) =>
                        this.setState({
                          formEdit: { ...formEdit, assignee: e.target.value },
                        })
                      }
                    />
                  ) : (
                    task.assignee
                  )}
                </td>
                <td style={{ padding: 10 }}>{this.renderStatus(task.done)}</td>
                <td style={{ padding: 10 }}>{this.renderDate(task.createdAt)}</td>
                <td style={{ padding: 10 }}>
                  {currentEdit === task.id ? (
                    <>
                      <button
                        style={{ marginRight: 5 }}
                        onClick={() => this.saveTask(task.id)}
                      >
                        Lưu
                      </button>
                      <button onClick={this.cancelEdit}>Hủy</button>
                    </>
                  ) : (
                    <>
                      <button
                        style={{ marginRight: 5 }}
                        onClick={() => this.startEdit(task)}
                      >
                        Sửa
                      </button>
                      <button onClick={() => this.removeTask(task.id)}>Xóa</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
