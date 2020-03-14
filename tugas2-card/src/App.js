import React, { Component } from 'react';
import './App.css';
import Card from './Card.js'

class App extends Component {
  render() {
    return (
      <div>
        <Card name="Prawito Hudoro" job="FrontEnd"/>
        <Card name="Mila Ikrima" job="Project Manager"/>
        <Card name="Mukidi" job="UI/UX"/>
      </div>
    );
  }
}

export default App;