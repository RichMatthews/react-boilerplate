import React from "react";
import axios from "axios";

class Users extends React.Component {
  state = {
    users: null,
    someState: "some state yo"
  };

  componentDidMount() {
    // console.log("loading...");
    // axios.get("/users").then(response => {
    //   console.log(response, "this is the response");
    // });
  }

  render() {
    console.log(this.state, "the state");
    return <div> Users </div>;
  }
}

export default Users;
