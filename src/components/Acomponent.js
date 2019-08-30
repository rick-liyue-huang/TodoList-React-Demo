
import React, { Component } from 'react'

// HoC 
export default (title) => WrappedComponent => class Acomponent extends Component {

    static displayName = `Acomponent(${getDisplayName(WrappedComponent)})`;

    constructor(props) {
      super(props);
      this.state = {
        value: ''
      };
    }

    render() {
      const { names, ...otherProps } = this.props;
      const newProps = {
        value: this.state.value,
        onInput: this.onInputChange.bind(this),
        // ref: this.refc.bind(this)
      };

      return (
        <div className='a-container'>
          <div className='header'>
            <div>Tips: </div>
            <div>{ title }</div>
            <div>X</div>
          </div>
          <div>
            {/* gender is props passed to wrappedcomponent */}
            <WrappedComponent gender='male' {...otherProps} /*ref={this.refc.bind(this)}*/ {...newProps} />
          </div>
        </div> 
      )
    }

    onInputChange(e) {
      const value = e.target.value
      this.setState({
        value: value
      });
    }

    refc(instance) {
      instance.getName && console.log(instance.getName());
    }
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
  }



