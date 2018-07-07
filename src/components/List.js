import React, { Component } from 'react';
import './List.css';
import ListItem from './ListItem';

export default class List extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            inputToChange: '',
            editToggle: false,
            workingInput: ''
            
        }
    }
    
    buttonHandle(index){
        this.setState({
            editToggle: true,
            
        })
        
    }

    
   
    

    render(){
        let listOutItems = this.props.listValue.map( (e, i) => {
            
            
            return  (
            <ListItem nameValue={e} index={i} 
                        passUpdated={this.props.passUpdated}
                        passListWithDeletes = {this.props.passListWithDeletes}
                        key={i}
                        />
            )
    })

    return (
       <div> {listOutItems} </div>
    )




    }
}