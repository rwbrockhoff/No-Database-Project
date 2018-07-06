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
    
    
    
    render(){
        return (
            <div className="container">
            <input placeholder="New Task" onChange={(e) => this.textHandle(e.target.value)}/>
            <button onClick={() => this.buttonHandle()}> + </button>
            </div>
        )
    }
}