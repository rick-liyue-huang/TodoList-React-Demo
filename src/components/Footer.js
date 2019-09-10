
import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    const { filter, handleSetVisibility } = this.props;
    return (
      <div>
        <span>Show: </span>
        <button
          disabled={filter === 'all'}
          onClick={() => handleSetVisibility('all')} >All</button>
        <button
          disabled={filter === 'active'}
          onClick={() => handleSetVisibility('active')} >Active</button>
        <button
          disabled={filter === 'completed'}
          onClick={() => handleSetVisibility('completed')} >Completed</button>
      </div>
    )
  }
}
