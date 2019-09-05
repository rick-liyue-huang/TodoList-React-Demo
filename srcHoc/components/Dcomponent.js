
import React from 'react';
// for Inheritance Inversion
const modifyPropsHoC = (WrappedComponent) => class NewComponent extends WrappedComponent {
  
  // for display the Hoc name
  static displayName = `NewComponent(${getDisplayName(WrappedComponent)})`;
  render() {
    const element = super.render();
    const newStyle = {
      color: element.type === 'div' ? 'red' : 'green'
    }
    const newProps = {...this.props, style: newStyle};
    return React.cloneElement(element, newProps, element.props.children);
  }
  componentWillMount() {
    console.log('this is modified lifecycle')
  }

}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export default modifyPropsHoC;