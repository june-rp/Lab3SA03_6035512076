import React, { Component } from 'react';
import './App.css';
export default class CharacterCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
        active: false,
    }
}

activate = () => {
    if (!this.state.active) {
        this.props.activationHandler(this.props.value)
        this.setState({ active: true })
    }
}
componentDidUpdate(prevProps) {
  if (prevProps.attempt != this.props.attempt || prevProps.reset !== this.props.reset) {
      this.setState({ active: false })
  }
}


  render() {
    let activeClass = this.state.active ? 'activeCard' : '';
    let className = `card ${activeClass}`
    return (
      <div className={className} onClick={this.activate}>
        {this.props.value}

      </div>
    )
  }

}