import React from "react";
import Footer from "../comps/footer";
import Navbar from "../comps/navbar";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
