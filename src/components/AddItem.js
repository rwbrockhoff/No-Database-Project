import React, { Component } from 'react';
import './AddItem.css';
import axios from 'axios';

export default class AddItem extends Component {
    constructor(){
        super()

        this.state ={
            input: '',
            savedState: ''
        }
    }
    
    textHandle(e){
        this.setState({
            input: e
        })
    }

    buttonHandle(){
        let typedValue = this.state.input;
        this.setState({
            savedState: typedValue
        })

        axios.post('/api/list', {listValue: this.state.savedState});
    }
    
    
    
    render(){
        return (
            <div className="container">
            <input placeholder="New Task" onChange={(e) => this.textHandle(e.target.value)}/>
            <button onClick={() => this.buttonHandle()}> + </button>
            <p> {this.state.savedState} </p>
            </div>
        )
    }
}