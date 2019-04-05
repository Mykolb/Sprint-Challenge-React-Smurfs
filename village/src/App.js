import React, { Component } from 'react';
//import axios//
import axios from 'axios';
//import router
import { Route, NavLink, Link} from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }


  //GET REQUEST 
  //request gets data from server
  //need server url & endpoint 
componentDidMount() {
  console.log('Get Req is working');
axios.get('http://localhost:3333/smurfs')
.then(response => {
  this.setState({ smurfs: response.data})
})
.catch(error => {
  console.log('Get Req messed up')
})
}

//POST REQUEST 
//saying go to server and get all the smurfs
//endpoint needs to match what's passed in 
addSmurf = smurfs => {
  console.log('Post req is working');
  axios.post('http://localhost:3333/smurfs', smurfs)
  .then(response => {
    this.setState({smurfs: response.data})
  })
  .catch(error => {
    console.log('Post req messed up')
  })
}






  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
      <div className='nav-bar'>
      <NavLink className='smurf-nav'>Smurfs</NavLink>
      <NavLink className='form-nav'>Smurf Form</NavLink>
      </div>
        <SmurfForm smurfform={this.addSmurf} />
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
