import React from "react";
import axios from "axios";
import Navbar from "../comps/navbar";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  userlogin() {
    axios
      .post("https://127.0.0.1:8000/api/users", {
        email: this.state.email,
        password: this.state.password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {" "}
        <div>
          <Navbar />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.userlogin();
          }}
        >
          <div className="card">
            <div className="card-body">
              <div className="mb-3">
                <label>Email</label>
                <input
                  type={"email"}
                  className="form-control"
                  value={this.state.email}
                  onChange={(event) => {
                    this.setState({ email: event.target.value });
                  }}
                />
              </div>
              <div className="mb-3">
                <label>password</label>
                <input
                  type={"password"}
                  className="form-control"
                  value={this.state.password}
                  onChange={(event) => {
                    this.setState({ password: event.target.value });
                  }}
                />
              </div>

              <button className="btn btn-primary" type="submit">
                login
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
