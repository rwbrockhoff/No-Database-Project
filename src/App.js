import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Title from './components/Title';
import AddItem from './components/AddItem';
import List from './components/List';
const API_KEY = "c1c40fc580af8fa9a51ba8fced2b634b";

class App extends Component {
  
  constructor(){
    super()

    this.state = {
      listValue: [],
      currentWeather: 0
    }

    this.postToApp = this.postToApp.bind(this);
    this.passUpdated = this.passUpdated.bind(this);
    this.passListWithDeletes = this.passListWithDeletes.bind(this);

    
    
  }

  componentDidMount(){
    axios.get('/api/list').then( (res) => {
      this.setState({
        listValue: res.data
      })
      
      
    })
    
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=${API_KEY}`).then( (res) => {
        
        this.setState({
          currentWeather: Math.round(res.data.main.temp)
        })
      })

  

  }


  postToApp(list){
    this.setState({
      listValue: list
    })
  }

  passUpdated(list){
    this.setState({
      listValue: list
    })
    
  }

  passListWithDeletes(list){
   this.setState({
      listValue: list
    })
  }

  render() {

    return (
      <div className="App">
        <Title />
        <div> {this.state.currentWeather}</div>
        <AddItem postToApp={this.postToApp}/>
        <List listValue={this.state.listValue} 
          passUpdated={this.passUpdated} 
          passListWithDeletes={this.passListWithDeletes}
          />
      </div>
    );
  }
}

export default App;
