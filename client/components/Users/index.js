import React from "react";
import axios from "axios";

class Users extends React.Component {
  async componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      console.log(response, "this is the respons");
    });
  }

  render() {
    return <div> Users </div>;
  }
}

export default Users;
