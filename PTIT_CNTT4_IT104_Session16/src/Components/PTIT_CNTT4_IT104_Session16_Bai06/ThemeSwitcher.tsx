import React, { Component } from "react";

type State = {
  isDarkMode: boolean;
};

export default class ThemeSwitcher extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }));
  };

  render() {
    const { isDarkMode } = this.state;

    return (
      <div className="bai6">
        <div className={isDarkMode ? "dark-theme" : "light-theme"}>
          <h2>
            {isDarkMode ? "🌙 Chế độ Tối đang bật" : "☀️ Chế độ Sáng đang bật"}
          </h2>
          <button onClick={this.toggleTheme}>Chuyển theme</button>
        </div>
      </div>
    );
  }
}
