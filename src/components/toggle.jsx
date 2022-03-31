import React, { Component } from "react";
import { render } from "react-dom";
//import FormatDate from"../components/formatDate";
 
function FormatDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.state = { date: new Date() };
    //This binding is necessary to make 'this' work in the callbacks
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

export class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  handleClick = () => {
    console.log("this is:", this);
    this.setState({ date: new Date() });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        <FormatDate date={this.state.date} />
      </div>
    );
  }
}

export default Toggle;
