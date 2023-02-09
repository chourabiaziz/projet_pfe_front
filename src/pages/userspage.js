import React from "react";
import Navbar from "../comps/navbar";

class UsersPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      isLoading: true,
    };
  }

  getDataFromServer() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://localhost:8000/api/v1/users/list", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        this.setState({ users: result, isLoading: false });
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
                <th>Phone</th>
              </tr>
            </thead>

            <tbody>
              {this.state.users.map((u) => {
                return (
                  <tr>
                    <td>{u.id}</td>
                    <td>{u.designation}</td>
                    <td>{u.quantite}</td>
                    <td>{u.prixHt}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default UsersPage;
