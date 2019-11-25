import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import { getSmurfs, deleteSmurf, editSmurf, postSmurf } from "../actions";

class SmurfVillage extends Component {
  state = {
    newSmurf: {
      name: "",
      height: "",
      age: ""
    }
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      newSmurf: {
        ...this.state.newSmurf,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    console.log("YOU ADDED A NEW SMURF", this.state.newSmurf);
    e.preventDefault();
    this.props.postSmurf(this.state.newSmurf);
    this.setState({
      newSmurf: {
        name: "",
        height: "",
        age: ""
      }
    });
  };

  componentDidMount() {
    this.props.getSmurfs();
    console.log(this.props.smurfs);
  }

  deleteSmurf = id => {
    this.props.deleteSmurf(id);
    console.log("YOU DELETED A SMURF! :( ");
  };

  editSmurf = id => {
    this.props.editSmurf(id);
    console.log("YOU EDITED A SMURF!");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.newSmurf.name}
            name="name"
            placeholder="Name"
          />
          <input
            onChange={this.handleChange}
            value={this.state.newSmurf.height}
            name="height"
            placeholder="Height"
          />
          <input
            onChange={this.handleChange}
            value={this.state.newSmurf.age}
            name="age"
            placeholder="Age"
          />
          <button type="submit">Add Smurf</button>
        </form>
        <div className="App">
          <ul>
            {this.props.smurfs.map((smurf, index) => (
              <li key={index}>
                <p>
                  {smurf.name}, {smurf.age}, {smurf.height}
                </p>
                <button
                  onClick={() => this.deleteSmurf(smurf.id)}
                  className="delete"
                >
                  x
                </button>
                <button
                  onClick={() => this.editSmurf(smurf.id)}
                  className="delete"
                >
                  EDIT
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  };
};

export default connect(mapStateToProps, { getSmurfs, deleteSmurf, editSmurf, postSmurf })(
  SmurfVillage
);
