import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../Home";
import Users from "../Users";
// import './index.scss';

class Example extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/users" component={Users} />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  myState: state.myState
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example);
