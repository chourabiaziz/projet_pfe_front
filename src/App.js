import logo from "./logo.svg";
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <h3>click {this.state.count} </h3>

        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          click me
        </button>
      </div>
    );
  }
}

export default App;
