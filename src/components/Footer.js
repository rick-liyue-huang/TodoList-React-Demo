
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const { filter, setVisibleFilter } = this.props;
    return (
      <div>
        <span>Show: </span>
        <button 
          disabled={filter === 'all'}
          onClick={() => setVisibleFilter('all')}>All</button>
        <button 
          disabled={filter === 'active'}
          onClick={() => setVisibleFilter('active')}>Active</button>
        <button 
          disabled={filter === 'completed'}
          onClick={() => setVisibleFilter('completed')}>Completed</button>
      </div>
    );
  }
}

export default Footer;