import React from 'react';
import './Title.css';
const image = require('../assets/bino.svg');


export default function Title(){
 
    let Title = "tasktrack"
      
    return (
      <div className="title">
      <img className="logo" src ={image} alt="logo"/>
      <h1> {Title} </h1>
      
      </div>
    )
}