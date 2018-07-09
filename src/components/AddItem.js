import React, { Component } from 'react';
import './AddItem.css';
import axios from 'axios';

export default class AddItem extends Component {
    constructor(props){
        super(props)

        this.state ={
            input: '',
            savedState: '',
        }
    }
    
    textHandle(e){
        this.setState({
            input: e
        })
    }

    buttonHandle(event){
        let typedValue = this.state.input;
        this.setState({
            savedState: typedValue
        })

        axios.post('/api/list', {listValue: typedValue}).then( (res) => {
            this.props.postToApp(res.data);
        })
        event.target.value="";

    }
    
    handleEnter = (event) => {
        if(event.key === 'Enter'){
          return this.buttonHandle(event)
        }

      }
    
    render(){
        return (
            <div className="container">
            <input className="addnew" type="text" placeholder="New Task" onKeyPress={this.handleEnter} onChange={(e) => this.textHandle(e.target.value)}/>
            
            </div>
        )
    }
}