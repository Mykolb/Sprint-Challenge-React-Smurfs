import React, { Component } from 'react';


//turned my state into an onject called smuf b/c it is easier for me to deal with
class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
      name: '',
      age: '',
      height: ''
      }
    }
  }

  //changed name of handler b/c add Smurf is the name of my post request 
  //changed event.default ot event.persist b/c I'm using functional setState
  changeHandler = event => {
    console.log('smurf handler is working');
    event.persist();
    // add code to create the smurf using the api
    let value = event.target.value;

    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [event.target.name]: value
      }
    }))

    }

  
//invoke addSmurf using function from post request and the smurf state from above 
handleSubmit = event => {
  event.preventDefault();
  this.props.addSmurf(this.state.smurf)

  this.setState({
    smurf: {
      name: '',
      age: '',
      height: ''  
    }
  })
};






  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.changeHandler}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            onChange={this.changeHandler}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            onChange={this.changeHandler}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
