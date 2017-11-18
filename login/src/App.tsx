import React, { Component } from 'react';
import './App.css';
import { Auth0Authentication } from './auth/Auth0Authentication';

const logo = require('./logo.svg');

export interface AppProps {
  auth: Auth0Authentication;
}
class App extends Component<AppProps, {}> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
