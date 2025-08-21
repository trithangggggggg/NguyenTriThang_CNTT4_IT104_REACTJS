import React, { Component } from "react";

type State = {
  email: string;
  password: string;
  message: string;
  errors: {
    email?: string;
    password?: string;
  };
};

export default class LoginForm extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
      errors: {},
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState(
      (prev) =>
        ({
          ...prev,
          [name]: value,
          errors: { ...prev.errors, [name]: "" },
        } as unknown as Pick<State, keyof State>)
    );
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = this.state;

    let errors: State["errors"] = {};
    const cleanEmail = email.trim().toLowerCase();
    const cleanPassword = password.trim();

    if (!cleanEmail) errors.email = "Email không được để trống";
    if (!cleanPassword) errors.password = "Mật khẩu không được để trống";

    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userFound = users.find(
      (u: any) => u.email === cleanEmail && u.password === cleanPassword
    );

    if (userFound) {
      this.setState({
        email: "",
        password: "",
        message: "Đăng nhập thành công!",
        errors: {},
      });
    } else {
      this.setState({ message: "Đăng nhập thất bại!" });
    }
  };

  render() {
    const { email, password, message, errors } = this.state;

    const inputStyle: React.CSSProperties = {
      width: "100%",
      padding: 8,
      marginBottom: 6,
      borderRadius: 4,
      border: "1px solid #ccc",
      fontSize: 14,
    };

    return (
      <div>
        <h1>Bài8:</h1>
        <div style={{ width: 320, margin: "auto", paddingTop: 30 }}>
          <h2 style={{ textAlign: "center" }}>Đăng nhập tài khoản</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
              style={inputStyle}
            />
            {errors.email && (
              <p
                style={{
                  color: "red",
                  fontSize: 13,
                  margin: "4px 0",
                  textAlign: "left",
                }}
              >
                {errors.email}
              </p>
            )}

            <input
              type="password"
              name="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={this.handleChange}
              style={inputStyle}
            />
            {errors.password && (
              <p
                style={{
                  color: "red",
                  fontSize: 13,
                  margin: "4px 0",
                  textAlign: "left",
                }}
              >
                {errors.password}
              </p>
            )}

            <button
              type="submit"
              style={{
                backgroundColor: "blue",
                color: "white",
                width: "100%",
                padding: 10,
                fontWeight: "bold",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
                marginTop: 10,
              }}
            >
              Đăng nhập
            </button>
          </form>

          {message && (
            <p
              style={{
                marginTop: 20,
                fontStyle: "italic",
                textAlign: "center",
                color: message.includes("thành công") ? "green" : "red",
              }}
            >
              {message}
            </p>
          )}

          <p
            style={{ marginTop: 30 , textAlign: "center" }}
          >
            Form đăng nhập tài khoản
          </p>
        </div>
      </div>
    );
  }
}
