import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import AddItem from './components/AddItem';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <AddItem />
      </div>
    );
  }
}

export default App;
