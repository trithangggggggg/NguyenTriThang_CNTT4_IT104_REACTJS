import { Component } from "react";

type State = { count: number };

export default class Count extends Component<object, State> {
  intervalId: number | undefined;

  constructor(props: object) {
    super(props);
    this.state = { count: 0 };
  }

  componentDidMount(): void {
    this.intervalId = window.setInterval(() => {
      this.setState((prev) => ({
        count: prev.count === 10 ? 0 : prev.count + 1,
      }));
    }, 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div style={{ padding: 20 }}>
        <span>Đếm số tự động mỗi giây</span> <span>{this.state.count}</span>
      </div>
    );
  }
}
