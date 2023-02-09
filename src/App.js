import logo from "./logo.svg";
import "./App.css";
import React from "react";

<<<<<<< HEAD
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
=======
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello wOrld</p>
        <h1>Taher Commit</h1>
      </header>
    </div>
  );
>>>>>>> 54cb3266c5ecf59292433f7a20056521f93859a9
}

export default App;
