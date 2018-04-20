import React, { Component } from 'react';
import logo from './logo.svg';
import star from './star.svg';
import './bootstrap.css';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import Checker from './components/Checker.js';
import Subject from './components/Subject.js';
import Question from './components/Question.js';
import Navigation from './components/Navigation.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Container>
            <Checker/>
            <Question/>
            <Subject/>
        </Container>
      </div>
    );
  }
}

export default App;
