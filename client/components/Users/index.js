import React from "react";
import axios from "axios";

class Users extends React.Component {
  state = {
    users: null,
    someState: "some state yo"
  };

  componentDidMount() {
    console.log("loading...");
    axios.get("/fetchUsers").then(response => {
      this.setState(() => ({
        users: response.data
      }));
    });
  }

  render() {
    console.log(this.state, "the state");
    return <div> Users: {JSON.stringify(this.state.users)} </div>;
  }
}

export default Users;
