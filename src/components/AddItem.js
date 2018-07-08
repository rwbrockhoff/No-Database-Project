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

    buttonHandle(props){
        let typedValue = this.state.input;
        this.setState({
            savedState: typedValue
        })

        axios.post('/api/list', {listValue: typedValue}).then( (res) => {
            this.props.postToApp(res.data);
        })
    }
    
    handleEnter = (event) => {
        if(event.key === 'Enter'){
          return this.buttonHandle()
        }
      }
    
    render(){
        return (
            <div className="container">
            <input type="text" placeholder="New Task" onKeyPress={this.handleEnter} onChange={(e) => this.textHandle(e.target.value)}/>
            <button type ="submit" onClick={() => this.buttonHandle()}> + </button>
            </div>
        )
    }
}