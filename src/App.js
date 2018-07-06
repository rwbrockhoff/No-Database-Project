import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import AddItem from './components/AddItem';
import List from './components/List';

class App extends Component {
  constructor(){
    super()

    this.state = {
      listValue: []
    }

    this.postToApp = this.postToApp.bind(this);
    
  }


  postToApp(list){
    this.setState({
      listValue: list
    })
  }

  render() {

    return (
      <div className="App">
        <Title />
        <AddItem postToApp={this.postToApp}/>
        <List listValue={this.state.listValue}/>
      </div>
    );
  }
}

export default App;
