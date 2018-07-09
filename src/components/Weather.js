import React, { Component } from 'react';
import './weather.css';

export default class Weather extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            changeLocation: true,
            inputCity: this.props.currentCity
        }
       
    }

    toggleLocation = () => {
        this.setState({
            changeLocation: !this.state.changeLocation
        })

        
    }

    changeInput(e){
        this.setState({
            inputCity: e
        })
    }

    changeCity = (props) => {
        let cityChange = this.state.inputCity
        this.setState({
            changeLocation: !this.state.changeLocation
        })
        return this.props.changeCityForWeather(cityChange)
    }

    whatReturns(){
        
            if (this.state.changeLocation === true){
                return (
            <div className="weather">
            <weather>Current weather in {this.props.currentCity}: {this.props.currentWeather}°</weather>
            <button onClick={this.toggleLocation}> Change Location </button>
                </div>  )

            }

            if (this.state.changeLocation === false){
                return (
                <div className="weather">
                <weather>New Location:   </weather> 
                <input onChange={ (e) => this.changeInput(e.target.value)} placeholder="Ex: Boise, Dallas, Phoenix"/>
                <button onClick={this.changeCity}> Update </button>
                </div>  )
                
                }
        
        
    }
    
    
    
    
    render(){
        return (
            this.whatReturns()
        )
    }
}

