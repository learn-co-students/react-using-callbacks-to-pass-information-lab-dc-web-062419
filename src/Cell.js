import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: this.props.color
    }
  }

  handleClick = () => {
    const colorStr = this.props.getColor()
    this.setState({backgroundColor: colorStr})
  }
  
  render() {
    return (
      <div className="cell" 
        style={{backgroundColor: this.state.backgroundColor}}
        onClick={this.handleClick}>
      </div>
    )
  }
  
}