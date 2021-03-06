import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import AddSmurf from './AddSmurf';
import SmurfVillage from './SmurfVillage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <NavLink exact to="/" activeclass="active">Home</NavLink>
          <NavLink to="/addsmurf" activeclass="active">Add Smurf</NavLink>
        </nav>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <Route exact path="/addsmurf" component={AddSmurf}/>
        <Route exact path="/" component={SmurfVillage}/>
      </div>
    );
  }
}

export default App;
