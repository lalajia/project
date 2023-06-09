import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      overTen: false,
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidUpdate(props, state) {
    if (
      this.state.count > 10 &&
      this.state.count !== state.count &&
      !this.state.overTen
    ) {
      this.setState({ overTen: true });
    }
  }

  render() {
    let { count } = this.state;
    return (
      <div>
        <h3>You have clicked the button {count} times.</h3>
        {(this.state.overTen) ? <h3>Beat high score of 10!</h3> : null}
        <span>
          <button onClick={(e) => this.handleClick()}>Click me</button>
        </span>
      </div>
    );
  }
}

export default App;
