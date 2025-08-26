import React, { Component } from "react";

type Button = {
  label: string;
  color: string;
};
type State = {
  btns: Button[];
};

export default class ButtonColor extends Component<{}, Button[]> {
  arrColor: Button[] = [
    {
      label: "primary",
      color: "blue",
    },
    {
      label: "secondary",
      color: "grey",
    },
    {
      label: "succes",
      color: "green",
    },
    {
      label: "warning",
      color: "yellow",
    },
    {
      label: "danger",
      color: "red",
    },
    {
      label: "info",
      color: "aqua",
    },
    {
      label: "light",
      color: "white",
    },
    {
      label: "dark",
      color: "dark",
    },
  ];

  constructor(props: {}) {
    super(props);
    this.state = [
      {
        label: "primary",
        color: "blue",
      },
      {
        label: "secondary",
        color: "grey",
      },
      {
        label: "succes",
        color: "green",
      },
      {
        label: "warning",
        color: "yellow",
      },
      {
        label: "danger",
        color: "red",
      },
      {
        label: "info",
        color: "aqua",
      },
      {
        label: "light",
        color: "white",
      },
      {
        label: "dark",
        color: "dark",
      },
    ];
  }

  render() {
    return (
      <div>
        {this.state.map((btn) => (
          <button style={{ backgroundColor: btn.color }}>{btn.label}</button>
        ))}
      </div>
    );
  }
}
