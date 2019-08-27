import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    };
  }

  newColor = () => {
      let newestColor = this.props.changeCol()
    this.setState({color: newestColor})
  }

  render() {
    return (
      <div onClick={this.newColor} className="cell" style={{ backgroundColor: this.state.color }}></div>
    );
  }
}
