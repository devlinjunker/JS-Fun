import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SubmitInput from "./component/SubmitInput.js";
import Clock from "./component/Clock.js";
import LoginPanel from "./component/LoginPanel.js";
import ListDisplay from "./component/ListDisplay.js";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      items: ["abc", "def"]
    }

    this.addItem = this.addItem.bind(this);
    this.test = this.test.bind(this);
  }

  test(userId, password){
    this.setState({
      loggedIn:true
    });
    alert(userId+":"+password);
  }

  addItem(item){
    this.setState((prev, props) => {
      prev.items.push(item);

      return {
        items: prev.items
      };
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>React Test Front-end</h2>
          <Clock/>
        </div>
        <div className="App-intro">
          <SubmitInput onSubmit={this.addItem}/>
          <hr/>
          <ListDisplay items={this.state.items}/>
          <hr/>
          <LoginPanel onLogin={this.test}/>
        </div>
      </div>
    );
  }
}

export default App;
