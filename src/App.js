import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import star from './star.svg';

const Question = (props) => {
  return (
    <div>
      What Shape Is This?
    </div>
  );
}

const Subject = (props) => {
  return (
    <div>
      <img src={star}/>
    </div>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

class App extends React.Component {
  render () {
    return (
      <div>
        <h3>Zabe's Game</h3>
        {/*Correct Button*/ }
        <Button />
        {/*Incorrect Button*/ }
        <Button />
        {/*Question */ }
        <Question />
        {/*Subject */ }
        <Subject />
      </div>
    )
  }
}

export default App;
