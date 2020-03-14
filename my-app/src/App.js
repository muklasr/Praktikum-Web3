import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-intro">Aku Muklis aku 11 tahun</h2>
          <p className="App-intro">
            Besok aku akan ulangtahun yang ke-12 yeay!
          </p>
        </div>
        <div>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="link">Link</Button>
        </div>
      </div>
    );
  }
}

export default App;
