import React from 'react';
import './App.css';

const Welcome = (props) => {
  return <h1>Hola {props.name}</h1>;
};


// class Welcome extends Component {
//   render() {
//     return <h1>Hola{this.props.name}</h1>;
//   }
// }

export default Welcome;