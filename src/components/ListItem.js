import React, { Component } from 'react';
import './ListItem.css';
import axios from 'axios';


export default class ListItem extends Component {
    constructor(props){
        super(props)

        let translateDisplay = this.props.nameValue;
       

        this.state = {
            editToggle: false,
            updatedText: this.props.nameValue,
            savedUpdatedText: '',
            displayText: translateDisplay,
            deleteIndex: this.props.index
        }
       
    }
   
    saveUpdatedText(e){
        this.setState({
            updatedText: e
        })
       

    }

    saveHandle(props){
        let finalUserSavedText = this.state.updatedText;
        this.setState({
            savedUpdatedText: finalUserSavedText
        })
       
        axios.put('/api/list', {listValue: finalUserSavedText, index: this.props.index}).then( (res) => {
            
            this.props.passUpdated(res.data);
            
        })

        this.setState({
            editToggle: !this.state.editToggle,
            displayText: finalUserSavedText

        })

        
    }

    handleDelete(props){
       
        axios.delete('/api/list', { data: {listValue: this.state.savedUpdatedText, index: this.props.index, id: this.props.id}}).then( (res) => {
            this.props.passListWithDeletes(res.data);
            
               
        })
        
       

        
    }



    editToggle(){
       this.setState({
           editToggle: !this.state.editToggle
       })
        
    }

    handleEnter = (event) => {
        if(event.key === 'Enter'){
          return this.saveHandle();
        }
      }
    
    whatReturns(){
    
        if (this.state.editToggle === false){
            return (
                <div className="listItemContainer">
            <p>{this.props.nameValue}  
            <button className="edit" onClick={() => this.editToggle()}>Edit</button> 
            <button className="delete" onClick={() => this.handleDelete()}>X</button>
            </p>  
            </div>
            )
        }

        else if (this.state.editToggle === true){
            return (
                <div className="listItemContainer">
            <p>  
                <input className="taskitem" type = "text" defaultValue={this.props.nameValue} onKeyPress={this.handleEnter} onChange={(e) => this.saveUpdatedText(e.target.value)}/> 
                <button className="save" onClick={() => this.saveHandle()}>Save</button>   
                <button className="delete" onClick={() => this.handleDelete()}>X</button>
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