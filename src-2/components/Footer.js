
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const { filter, handleSetVisibleFilter } = this.props;
    return (
      <div>
        <span>Show: </span>
        <button 
          disabled={filter === 'all'}
          onClick={() => handleSetVisibleFilter('all')} >All</button>
        <button
         disabled={filter === 'active'}
         onClick={() => handleSetVisibleFilter('active')} >Active</button>
        <button
         disabled={filter === 'completed'}
         onClick={() => handleSetVisibleFilter('completed')} >Completed</button>
      </div>
    );
  }
}

export default Footer;