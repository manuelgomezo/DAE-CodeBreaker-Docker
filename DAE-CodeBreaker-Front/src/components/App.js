import React, { Component } from 'react';
import CodeTestForm from '../components/CodeTestForm';
import CodePushForm from '../components/CodePushForm';
import logo from '../assets/logo.svg';
import config from '../config.js';
import '../assets/App.css';
import axios from 'axios';

class App extends Component {

  constructor(){
    super();
    this.state = {res: ""};
  }

  handleSetNumber (event) {
    event.preventDefault();
    let number = event.target.mnum.value; 
    let self = this;
    axios.get(config.server+"secret/"+number)
    .then(function(response) {
      self.setState({res: JSON.stringify(response.data)});       
    }).catch(function(error) {
      self.setState({res: JSON.stringify(error.data)});
    });
  }

  handleSendNumber (event) {
    event.preventDefault();
    let number = event.target.cnum.value; 
    let self = this;
    axios.get(config.server + number)
    .then(function(response) {
      self.setState({res: JSON.stringify(response.data)});       
    }).catch(function(error) {
      self.setState({res: JSON.stringify(error.data)});
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Manuel Gomez</h2>
        </div>
        <div>
          <CodePushForm setNumber={this.handleSetNumber.bind(this)} />
          <CodeTestForm sendNumber={this.handleSendNumber.bind(this)} />
        </div>
        <div className="res-block">
          <div>
            <h3>Resultado:</h3>
            <pre>{this.state.res}</pre>
          </div>
        </div>
      </div>
    );
  }
}

export default App;