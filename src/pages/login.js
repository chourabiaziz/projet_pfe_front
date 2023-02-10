import Navbar from "../comps/navbar";
import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
      total: null,
      password: "",
    };
  }

  getDataFromServer() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      Headers: {
        "content-type": "application/json",
        Accept: "application/json",
      },
    };

    fetch("https://127.0.0.1:8000/api/users", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          users: result["hydra:member"],
          isLoading: false,
        });
      })
      .catch((error) => console.log("error", error));
  }

  componentDidMount() {
    this.getDataFromServer();
  }

  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>

        <form>
          <div class="form-outline mb-4">
            <input type="email" id="email" class="form-control" />
            <label class="form-label" for="email">
              Email address
            </label>
          </div>
          <div class="form-outline mb-4">
            <input
              type="password"
              id="password"
              value={this.password}
              class="form-control"
            />
            <label class="form-label" for="password"></label>
          </div>
          <button type="button" class="btn btn-primary btn-block mb-4">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
