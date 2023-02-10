import React from "react";
import Navbar from "../comps/navbar";

class UsersPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isLoading: true,
      total: null,
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
      });
    fetch("https://127.0.0.1:8000/api/users", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          total: result["hydra:totalItems"],
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
        <Navbar />

        <div className="container mt-5">
          {this.state.isLoading === true ? (
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          ) : null}

          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>role</th>
              </tr>
            </thead>

            <tbody>
              {this.state.users.map((users) => {
                return (
                  <tr>
                    <td>{users.id}</td>

                    <td>{users.email}</td>
                    <td>{users.roles}</td>
                  </tr>
                );
              })}
              <td>total users is {this.state.total}</td>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UsersPage;
