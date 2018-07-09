import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Title from './components/Title';
import AddItem from './components/AddItem';
import List from './components/List';
import Weather from './components/Weather';
import DeletedItems from "./components/DeletedItems";
const API_KEY = "c1c40fc580af8fa9a51ba8fced2b634b";

class App extends Component {
  
  constructor(){
    super()

    this.state = {
      listValue: [],
      deleteCount: 0,
      currentWeather: 0,
      currentCity: "Berlin"
    }

    this.postToApp = this.postToApp.bind(this);
    this.passUpdated = this.passUpdated.bind(this);
    this.passListWithDeletes = this.passListWithDeletes.bind(this);
    this.changeCityForWeather = this.changeCityForWeather.bind(this);
    
    
  }

  componentDidMount(){
    axios.get('/api/list').then( (res) => {
      this.setState({
        listValue: res.data
      })
      
      
    })
    
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.currentCity}&units=imperial&appid=${API_KEY}`).then( (res) => {
        
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
      listValue: list,
      deleteCount: this.state.deleteCount + 1
    })
    console.log(this.state.deleteCount)
  }

  changeCityForWeather(city){
    this.setState({
      currentCity: city
    })

    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_KEY}`).then( (res) => {
        
      this.setState({
        currentWeather: Math.round(res.data.main.temp)
      })
    })
  }

  render() {

    return (
      <div className="App">
        <Weather changeCityForWeather={this.changeCityForWeather} 
        currentWeather={this.state.currentWeather} 
        currentCity={this.state.currentCity}
        deleteCount={this.state.deleteCount}/>
        <Title />
        <AddItem postToApp={this.postToApp}/>
        <List listValue={this.state.listValue} 
          passUpdated={this.passUpdated} 
          passListWithDeletes={this.passListWithDeletes}
          />
          <DeletedItems />
      </div>
    );
  }
}

export default App;
