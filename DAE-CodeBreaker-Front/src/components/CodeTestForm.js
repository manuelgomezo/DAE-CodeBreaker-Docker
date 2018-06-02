import React, { Component } from 'react'

export default class CodeTestForm extends Component{
  render(){
    return ( 
      <form onSubmit={this.props.sendNumber}>
          <input type="number" placeholder="Enter your number" name="cnum" />
          <input type="submit" value="Send" />
      </form>
    );
  }
}