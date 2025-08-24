import { Component } from "react";

type State = {
  time: Date;
};

export default class Clock extends Component<object, State> {
  timerId: number | undefined;

  constructor(props: object) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }

  componentDidMount(): void {
    this.timerId = window.setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.timerId);
  }

  formatTime(value: number): string {
    return value.toString().padStart(2, "0");
  }

  render() {
    const { time } = this.state;
    const hours = this.formatTime(time.getHours());
    const minutes = this.formatTime(time.getMinutes());
    const seconds = this.formatTime(time.getSeconds());

    return (
      <div>
        <h3> Thời gian hiện tại: {hours}:{minutes}:{seconds} </h3>
      </div>
    );
  }
}



