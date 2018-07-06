import React, { Component } from 'react';
import './ListItem.css';

export default class ListItem extends Component {
    render(){
        return (
            <div className="listItemContainer">
            <p>{this.props.nameValue}</p>
            </div>
        )
    }
}