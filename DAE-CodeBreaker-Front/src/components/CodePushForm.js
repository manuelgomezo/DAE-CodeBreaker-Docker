import React, { Component } from 'react'

export default class CodeTestForm extends Component{
  render(){
    return ( 
      <form onSubmit={this.props.setNumber}>
          <input type="number" placeholder="Set the magic number" name="mnum" />
          <input type="submit" value="Register" />
      </form>
    );
  }
}