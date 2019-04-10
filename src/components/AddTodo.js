
import React, { Component } from 'react';

class AddTodo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: 'please'
    };
    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.hanldeClick = this.hanldeClick.bind(this);
  }

  render() {
    return (
      <div>
        <input 
          value={this.state.inputValue}
          onClick={this.handleInputClick}
          onChange={this.handleInputChange} />
        <button onClick={this.hanldeClick} >Submit</button>
      </div>
    );
  }

  handleInputClick() {
    this.setState({
      inputValue: ''
    });
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  hanldeClick() {
    this.props.handleAddTodo(this.state.inputValue);
    this.setState({
      inputValue: ''
    });
  }
}

export default AddTodo;