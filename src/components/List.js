import React, { Component } from 'react';
import './List.css';

export default class List extends Component {
    constructor(props){
        super(props)
        
        
    }
    
   
    

    render(){
        let listOutItems = this.props.listValue.map( (e, i) => {
            return <p key={i}>  {e} </p>
        })

        return (
            <div> {listOutItems} <button> Edit </button>   </div>
        )
    }
}