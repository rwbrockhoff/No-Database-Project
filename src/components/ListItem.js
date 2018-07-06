import React, { Component } from 'react';
import './ListItem.css';

export default class ListItem extends Component {
    constructor(props){
        super(props)

        this.state = {
            editToggle: false,
            updatedText: ''
        }
       
    }
   

    editToggle(){
       this.setState({
           editToggle: !this.state.editToggle
       })
        
    }
    
    whatReturns(){
        console.log(this.state);
        if (this.state.editToggle === false){
            return (
                <div className="listItemContainer">
            <p>{this.props.nameValue}  <button onClick={() => this.editToggle()}>Edit</button>   </p>  
            </div>
            )
        }

    saveUpdatedText(e){

    }
        else if (this.state.editToggle === true){
            return (
                <div className="listItemContainer">
            <p>  
                <input type = "text" defaultValue={this.props.nameValue} onChange={(e) => this.saveUpdatedText(e.target.value)}/> 
                <button onClick={() => this.editToggle()}>Save</button>   
            </p>
            </div>
            )
        }
    }
    
    
    render(){
        
        return (
            <div> {this.whatReturns()}   </div>
        )
    }
}