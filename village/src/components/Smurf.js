import React from 'react';
//import bootstrap//
import { Card, CardTitle, CardText, Button } from 'reactstrap';


const Smurf = props => {
  return (
    <div className="smurf-card">
    <Card  className='card'>
      <CardTitle>{props.name}</CardTitle>
      <CardText><strong>{props.height} tall</strong></CardText>
      <CardText>{props.age} smurf years old</CardText>
      <Button outline color='danger' size='sm' className='delete-btn'>Delete</Button>
      <Button outline color='warning' size='sm' className='edit-btn'>Edit</Button>
      </Card>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

