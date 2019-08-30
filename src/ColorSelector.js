import React, { Component } from 'react';
// import selectColor from './Matrix'

export default class ColorSelector extends Component {

  // selectColor=(str) => {
  //   console.log(this.state)
  //   // this.setState({newColor:str})
  // }
  
  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}} onClick={()=>{this.props.clickHandler(str)}}/>
    })
  )
  
  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
  
}
